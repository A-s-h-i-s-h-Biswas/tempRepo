import type { SVGProps } from "react";

/**
 * Lucide dropped brand/logo glyphs (GitHub, LinkedIn, X, ...) in favor of a
 * dedicated icon set. These are hand-rolled to avoid pulling in a whole
 * brand-icon package for three logos.
 */

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function TwitterXIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.94 10.6 21.3 2h-1.75l-6.4 7.47L7.8 2H2l7.72 11.24L2 22h1.74l6.75-7.9L16.2 22H22l-8.06-11.4Zm-2.39 2.8-.78-1.11L4.55 3.3h2.68l5.02 7.17.78 1.11 6.53 9.33h-2.68l-5.33-7.51Z" />
    </svg>
  );
}
export function LeetcodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden {...props}>
      <path d="M21.47 23.5a1.3 1.3 0 0 1-.92-.38l-4.55-4.56a1.3 1.3 0 0 1 0-1.84l4.55-4.55a1.3 1.3 0 1 1 1.84 1.84L18.76 17l3.63 3.66a1.3 1.3 0 0 1-.92 2.84ZM13.13 28a1.3 1.3 0 0 1-.92-.38L4.38 19.8a5.3 5.3 0 0 1 0-7.5l7.83-7.83a1.3 1.3 0 0 1 1.84 1.84L6.22 14.14a2.7 2.7 0 0 0 0 3.82l7.83 7.82A1.3 1.3 0 0 1 13.13 28Zm4.7-8.7a1.3 1.3 0 1 1 0-2.6h8.87a1.3 1.3 0 1 1 0 2.6Z" />
    </svg>
  );
}
