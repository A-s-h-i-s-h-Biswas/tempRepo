import { SerwistProvider } from "@serwist/turbopack/react";
import type { Metadata, Viewport } from "next";

import { AuroraBackground } from "@/components/animations/aurora-background";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { siteConfig } from "@/config/site.config";
import { projects } from "@/data/projects";
import { CommandPaletteLazy } from "@/features/command-palette/command-palette-lazy";
import { fontVariables } from "@/lib/fonts";
import { constructMetadata } from "@/lib/metadata";
import { posts } from "#site/content";

import "./globals.css";

const commandProjects = projects.map((project) => ({
  name: project.name,
  slug: project.slug,
}));

const commandPosts = posts
  .filter((post) => post.published)
  .map((post) => ({ title: post.title, slug: post.slug }));

export const metadata: Metadata = {
  ...constructMetadata(),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d14" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.url,
  jobTitle: "Software Engineer",
  email: siteConfig.author.email,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontVariables} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="bg-accent-blue fixed top-4 left-4 z-50 -translate-y-20 rounded-lg px-4 py-2 text-sm font-medium text-white transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SerwistProvider swUrl="/serwist/sw.js">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <LenisProvider>
              <AuroraBackground />
              <Navbar />
              <div id="main-content" className="contents">
                {children}
              </div>
              <Footer />
              <CommandPaletteLazy
                projects={commandProjects}
                posts={commandPosts}
              />
            </LenisProvider>
          </ThemeProvider>
        </SerwistProvider>
      </body>
    </html>
  );
}
