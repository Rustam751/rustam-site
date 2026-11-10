"use client";
import { MotionConfig } from "framer-motion";

// Makes every animation on the site respect the visitor's "reduce motion"
// setting: when it is on, things appear without sliding or scaling.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
