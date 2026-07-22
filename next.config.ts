import type { NextConfig } from "next";

const isDev = process.argv.includes("dev");
const isBuild = process.argv.includes("build");

export default async function config(): Promise<NextConfig> {
  if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = "1";
    const { build } = await import("velite");
    await build({ watch: isDev, clean: !isDev });
  }

  return {
    typedRoutes: true,
    images: {
      formats: ["image/avif", "image/webp"],
    },
    serverExternalPackages: ["esbuild", "esbuild-wasm"],
  };
}
