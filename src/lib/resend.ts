import { Resend } from "resend";

if (!process.env.RESEND_API_KEY && process.env.NODE_ENV === "production") {
  console.warn("WARNING: RESEND_API_KEY is not defined in environment variables.");
}

export const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");
