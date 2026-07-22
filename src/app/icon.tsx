import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          background: "linear-gradient(to bottom right, #2a8eff, #9d5bf4)",
          color: "#fff",
          fontSize: 16,
          fontWeight: 600,
          fontFamily: "sans-serif",
          letterSpacing: -0.5,
        }}
      >
        AB
      </div>
    ),
    { ...size },
  );
}
