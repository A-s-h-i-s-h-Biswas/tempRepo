import { Container } from "@/components/layout/container";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  LeetcodeIcon,
} from "@/components/shared/social-icons";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t py-10">
      <Container className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>
          © {year} {siteConfig.name}. Built with Next.js, TypeScript, Tailwind
          CSS, and Framer Motion. Hosted on Vercel.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <LinkedinIcon className="size-4" />
          </a>
          {/* <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-foreground transition-colors"
          >
            <TwitterXIcon className="size-4" />
          </a> */}
          <a
            href={siteConfig.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leetcode"
            className="hover:text-foreground transition-colors"
          >
            <LeetcodeIcon className="size-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
