"use server";

import { resend } from "@/lib/resend";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export type InquiryPayload = {
  source: "homepage_form" | "quote_modal";
  fullName: string;
  company?: string; // only present on homepage / contact form
  phone: string;
  email: string;
  productCategory?: string; // only present on quote modal
  message: string;
};

export type InquiryResult = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof InquiryPayload, string>>;
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendInquiry(
  payload: InquiryPayload
): Promise<InquiryResult> {
  const errors: Partial<Record<keyof InquiryPayload, string>> = {};

  // 1. Server-side validation
  const fullName = payload.fullName?.trim() || "";
  const phone = payload.phone?.trim() || "";
  const email = payload.email?.trim() || "";
  const message = payload.message?.trim() || "";
  const company = payload.company?.trim() || "";
  const productCategory = payload.productCategory?.trim() || "";

  if (!fullName || fullName.length < 2) {
    errors.fullName = "Full name must be at least 2 characters.";
  }

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^[0-9+()\-.\s]{7,20}$/.test(phone)) {
    errors.phone = "Please enter a valid contact phone number.";
  }

  if (!email) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message || message.length < 3) {
    errors.message = "Please enter your requirement or inquiry details.";
  }

  if (payload.source === "homepage_form" && !company) {
    errors.company = "Company / organization name is required.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors,
    };
  }

  // 2. Prepare Email Recipients
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "inquiries@samarthcorporation.co";
  const toEmail =
    process.env.RESEND_TO_EMAIL || "samarthcorporation.mumbai@gmail.com";

  const isModal = payload.source === "quote_modal";
  const notificationSubject = isModal
    ? "New Website Inquiry — Quote Request"
    : "New Website Inquiry — Homepage Form";

  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeCompany = company ? escapeHtml(company) : "Not Provided";
  const safeProduct = productCategory ? escapeHtml(productCategory) : "General Inquiry";
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const submissionTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  // 3. Generate Notification Email HTML (for Internal Sales Team)
  const notificationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${notificationSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0A1628 0%, #142642 100%); padding: 24px 32px; border-bottom: 3px solid #FF6B00;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 700; letter-spacing: 1px; color: #FF6B00; text-transform: uppercase; margin-bottom: 4px;">
                      Website Lead Capture
                    </div>
                    <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; line-height: 1.3;">
                      ${notificationSubject}
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Meta Strip -->
          <tr>
            <td style="background-color: #f8fafc; padding: 12px 32px; border-bottom: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
              Submitted on: <strong style="color: #334155;">${submissionTime} (IST)</strong> &bull; Source: <strong style="color: #FF6B00;">${payload.source}</strong>
            </td>
          </tr>

          <!-- Content Details -->
          <tr>
            <td style="padding: 28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; line-height: 1.6;">
                <tr>
                  <td style="padding-bottom: 16px; width: 140px; color: #64748b; font-weight: 600;">Full Name:</td>
                  <td style="padding-bottom: 16px; color: #0f172a; font-weight: 700;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px; color: #64748b; font-weight: 600;">Phone Number:</td>
                  <td style="padding-bottom: 16px; color: #0f172a;">
                    <a href="tel:${safePhone}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${safePhone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px; color: #64748b; font-weight: 600;">Email Address:</td>
                  <td style="padding-bottom: 16px; color: #0f172a;">
                    <a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none; font-weight: 600;">${safeEmail}</a>
                  </td>
                </tr>
                ${
                  payload.company
                    ? `<tr>
                  <td style="padding-bottom: 16px; color: #64748b; font-weight: 600;">Company / Org:</td>
                  <td style="padding-bottom: 16px; color: #0f172a; font-weight: 600;">${safeCompany}</td>
                </tr>`
                    : ""
                }
                ${
                  payload.productCategory
                    ? `<tr>
                  <td style="padding-bottom: 16px; color: #64748b; font-weight: 600;">Product / Category:</td>
                  <td style="padding-bottom: 16px; color: #FF6B00; font-weight: 700;">${safeProduct}</td>
                </tr>`
                    : ""
                }
              </table>

              <!-- Message Section -->
              <div style="margin-top: 16px; padding: 18px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #FF6B00;">
                <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 8px; letter-spacing: 0.5px;">
                  Requirement / Project Scope:
                </div>
                <div style="font-size: 14px; line-height: 1.6; color: #334155;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Action Links -->
              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                <a href="mailto:${safeEmail}?subject=Re: Inquiry with Samarth Corporation" style="display: inline-block; background-color: #FF6B00; color: #ffffff; font-weight: 600; font-size: 13px; text-decoration: none; padding: 10px 20px; border-radius: 6px; margin-right: 8px;">
                  Reply to Customer
                </a>
                <a href="tel:${safePhone}" style="display: inline-block; background-color: #0A1628; color: #ffffff; font-weight: 600; font-size: 13px; text-decoration: none; padding: 10px 20px; border-radius: 6px;">
                  Call Customer
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 16px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #94a3b8;">
              This notification was automatically sent by the ${CONTACT_CONFIG.companyName} website.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  // 4. Generate Confirmation Email HTML (for the Customer/Submitter)
  const confirmationSubject = `We've received your inquiry — ${CONTACT_CONFIG.companyName}`;
  const confirmationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${confirmationSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 24px 12px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0A1628 0%, #142642 100%); padding: 28px 32px; border-bottom: 3px solid #FF6B00; text-align: left;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;">
                ${CONTACT_CONFIG.companyName}
              </h1>
              <p style="margin: 4px 0 0 0; font-size: 12px; color: #cbd5e1;">
                FRP Engineering Solutions &bull; Manufacturing &bull; Turnkey Execution
              </p>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 28px 32px;">
              <p style="margin: 0 0 16px 0; font-size: 15px; font-weight: 600; color: #0f172a;">
                Dear ${safeName},
              </p>
              <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.6; color: #334155;">
                Thank you for reaching out to <strong>${CONTACT_CONFIG.companyName}</strong>. We have successfully received your inquiry and project specifications.
              </p>
              <p style="margin: 0 0 20px 0; font-size: 14px; line-height: 1.6; color: #334155;">
                Our technical engineering and commercial sales team will review your requirements and respond with competitive rates, technical data sheets, and lead times <strong>within 24 hours</strong>.
              </p>

              <!-- Summary Card -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #FF6B00; margin-bottom: 10px; letter-spacing: 0.5px;">
                  Summary of your submission:
                </div>
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 13px; line-height: 1.6;">
                  ${
                    company
                      ? `<tr>
                    <td style="color: #64748b; width: 130px; padding-bottom: 6px;">Company / Org:</td>
                    <td style="color: #0f172a; font-weight: 600; padding-bottom: 6px;">${safeCompany}</td>
                  </tr>`
                      : ""
                  }
                  ${
                    productCategory
                      ? `<tr>
                    <td style="color: #64748b; width: 130px; padding-bottom: 6px;">Product Requested:</td>
                    <td style="color: #0f172a; font-weight: 600; padding-bottom: 6px;">${safeProduct}</td>
                  </tr>`
                      : ""
                  }
                  <tr>
                    <td style="color: #64748b; width: 130px; padding-bottom: 6px;">Phone:</td>
                    <td style="color: #0f172a; padding-bottom: 6px;">${safePhone}</td>
                  </tr>
                  <tr>
                    <td style="color: #64748b; width: 130px; vertical-align: top;">Requirement:</td>
                    <td style="color: #334155;">${safeMessage}</td>
                  </tr>
                </table>
              </div>

              <!-- Direct Urgent Support -->
              <div style="padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #64748b; line-height: 1.6;">
                <p style="margin: 0 0 8px 0;">
                  Need urgent assistance or an immediate BOQ estimate?
                </p>
                <p style="margin: 0; font-weight: 600; color: #0f172a;">
                  Direct Sales Call / WhatsApp: <a href="tel:${CONTACT_CONFIG.contacts.vishal.phone}" style="color: #FF6B00; text-decoration: none;">${CONTACT_CONFIG.contacts.vishal.phoneDisplay}</a><br />
                  Official Email: <a href="mailto:${CONTACT_CONFIG.email}" style="color: #FF6B00; text-decoration: none;">${CONTACT_CONFIG.email}</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0A1628; padding: 20px 32px; text-align: center; font-size: 11px; color: #94a3b8; line-height: 1.6;">
              <strong>${CONTACT_CONFIG.companyName}</strong> &bull; MIDC Taloja, Navi Mumbai / Raigad, Maharashtra<br />
              Manufacturer &amp; Stockist of FRP Tanks, Scrubbers, Blowers, Lining &amp; Turnkey Projects
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  // 5. Send emails via Resend
  try {
    // 5a. Send internal notification email
    const notificationResponse = await resend.emails.send({
      from: `${CONTACT_CONFIG.companyName} Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: notificationSubject,
      html: notificationHtml,
    });

    if (notificationResponse.error) {
      console.error("[sendInquiry] Resend notification error:", notificationResponse.error);
      return {
        success: false,
        message: "Failed to send inquiry email. Please try calling or messaging us directly.",
      };
    }

    // 5b. Send confirmation email to the submitter
    // (Failures here should not fail the user's inquiry submission, but log server-side)
    try {
      await resend.emails.send({
        from: `${CONTACT_CONFIG.companyName} <${fromEmail}>`,
        to: [email],
        subject: confirmationSubject,
        html: confirmationHtml,
      });
    } catch (confError) {
      console.error("[sendInquiry] Customer confirmation email failed:", confError);
    }

    return {
      success: true,
      message: "Thank you! Your inquiry has been sent successfully. Our engineering team will get back to you within 24 hours.",
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("[sendInquiry] Unhandled error during email dispatch:", errorMessage);
    return {
      success: false,
      message: "An unexpected error occurred while sending your inquiry. Please try again or contact us via WhatsApp.",
    };
  }
}
