import { ImageResponse } from "next/og";
import {
  TOTAL_CATEGORIES_COUNT,
  TOTAL_PRODUCTS_COUNT,
} from "@/data/productsData";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "Complete FRP Product List — Samarth Corporation";
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A1628",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient Top Accent Bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#FF6B00",
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#FF6B00",
              }}
            />
            <span
              style={{
                color: "#FF6B00",
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Samarth Corporation
            </span>
          </div>

          <span
            style={{
              color: "#94A3B8",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            www.samarthcorporation.co
          </span>
        </div>

        {/* Center Title Block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255, 107, 0, 0.15)",
              border: "1px solid rgba(255, 107, 0, 0.4)",
              padding: "6px 16px",
              borderRadius: "9999px",
              alignSelf: "flex-start",
            }}
          >
            <span
              style={{
                color: "#FF8C33",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Official Technical Catalog
            </span>
          </div>

          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "62px",
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Complete FRP Product List
          </h1>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "24px",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Turnkey Industrial FRP Tanks, Scrubbers, Gratings, Architectural Panels, Defence Gear, Boats &amp; Pools
          </p>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span
                style={{
                  color: "#FF6B00",
                  fontSize: "40px",
                  fontWeight: 900,
                }}
              >
                {TOTAL_CATEGORIES_COUNT}
              </span>
              <span
                style={{
                  color: "#94A3B8",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Divisions
              </span>
            </div>

            <span style={{ color: "#475569", fontSize: "24px" }}>•</span>

            <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "40px",
                  fontWeight: 900,
                }}
              >
                {TOTAL_PRODUCTS_COUNT}
              </span>
              <span
                style={{
                  color: "#94A3B8",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Products
              </span>
            </div>

            <span style={{ color: "#475569", fontSize: "24px" }}>•</span>

            <span
              style={{
                color: "#34D399",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Pan-India &amp; Export
            </span>
          </div>

          <span
            style={{
              color: "#64748B",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            MSME UDYAM &amp; GST Registered
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
