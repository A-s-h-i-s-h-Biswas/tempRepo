interface CoverTemplateProps {
  kicker: string;
  name: string;
  tagline: string;
}

/**
 * Rendered through Satori (next/og's ImageResponse), which only understands
 * inline styles — no Tailwind classes or CSS custom properties from
 * globals.css, so the brand colors are hard-coded to match the design system.
 */
export function CoverTemplate({ kicker, name, tagline }: CoverTemplateProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background:
          "linear-gradient(135deg, #0b0d14 0%, #12141f 55%, #171225 100%)",
        color: "#f5f6fa",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "linear-gradient(135deg, #3b82f6, #a855f7)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          AB
        </div>
        <div style={{ fontSize: 24, color: "#9ca3af", display: "flex" }}>
          Ashish Biswas — {kicker}
        </div>
      </div>
      <div
        style={{
          fontSize: 62,
          fontWeight: 700,
          display: "flex",
          maxWidth: 950,
          lineHeight: 1.1,
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#9ca3af",
          marginTop: 24,
          display: "flex",
          maxWidth: 860,
        }}
      >
        {tagline}
      </div>
    </div>
  );
}
