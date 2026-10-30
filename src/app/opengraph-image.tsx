import { ImageResponse } from "next/og";
export const alt =
  "Naphat Chartwanchai — Building intelligent things for the real world.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#fafaf8",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "65px 75px",
        fontFamily: "sans-serif",
        color: "#171717",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
        }}
      >
        <span>naphat / engineer</span>
        <span style={{ color: "#3565ec" }}>SOFTWARE ENGINEER / AI & DATA</span>
      </div>
      <div
        style={{
          fontSize: 87,
          letterSpacing: "-5px",
          lineHeight: 1.05,
          marginTop: 85,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>Building intelligent</span>
        <span>things for the real world.</span>
      </div>
      <div style={{ marginTop: "auto", fontSize: 21, display: "flex" }}>
        Naphat Chartwanchai · Chulalongkorn University
      </div>
    </div>,
    size,
  );
}
