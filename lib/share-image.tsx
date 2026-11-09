import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { profile } from "@/lib/data";

// The picture shown when a link to the site is shared (LinkedIn, iMessage,
// Slack, X). Same colours and "RM" badge as the header and the favicon.
// Used by app/opengraph-image.tsx and app/twitter-image.tsx.
export const shareImageSize = { width: 1200, height: 630 };
export const shareImageAlt = "Rustam Mukhtarov — ML/AI Engineer. I build deployable AI systems.";

const font = (weight: 400 | 700) =>
  readFile(
    path.join(
      process.cwd(),
      `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`
    )
  );

export async function shareImage() {
  const [regular, bold] = await Promise.all([font(400), font(700)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#08080b",
          backgroundImage:
            "radial-gradient(900px 600px at 85% -10%, rgba(124,140,255,0.30), transparent 60%), radial-gradient(700px 500px at 0% 100%, rgba(79,214,224,0.18), transparent 60%)",
          color: "#ededf2",
          fontFamily: "Inter",
        }}
      >
        {/* Top row: badge + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              background: "linear-gradient(135deg, #8b9bff 0%, #4fd6e0 100%)",
              color: "#0a0a0f",
              fontWeight: 700,
              fontSize: 40,
              letterSpacing: -1.5,
            }}
          >
            RM
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700 }}>Rustam Mukhtarov</div>
            <div style={{ fontSize: 24, color: "#a1a1ac" }}>{`ML/AI Engineer · ${profile.location}`}</div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -3,
              backgroundImage: "linear-gradient(120deg, #ffffff 10%, #8b9bff 55%, #4fd6e0 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {`${profile.tagline}.`}
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#a1a1ac" }}>
            RAG pipelines · ML APIs · computer vision · medical imaging
          </div>
        </div>

        {/* Bottom row: address */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#a1a1ac",
          }}
        >
          <div style={{ color: "#8b9bff", fontWeight: 700 }}>mukhtarov.dev</div>
          <div>Projects · Experience · CV</div>
        </div>
      </div>
    ),
    {
      ...shareImageSize,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
