import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

// The "RM" badge from the site header, rendered as an image at any size.
// Used by app/icon.tsx (favicon) and app/apple-icon.tsx (iOS home screen).
export async function brandIcon(size: number) {
  const inter = await readFile(
    path.join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-700-normal.woff")
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: size * 0.22,
          background: "linear-gradient(135deg, #8b9bff 0%, #4fd6e0 100%)",
          color: "#0a0a0f",
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: size * 0.46,
          letterSpacing: -size * 0.03,
        }}
      >
        RM
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Inter", data: inter, weight: 700, style: "normal" }],
    }
  );
}
