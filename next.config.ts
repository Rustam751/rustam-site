import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so stray lockfiles elsewhere on the machine
  // don't confuse Turbopack's root detection.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
