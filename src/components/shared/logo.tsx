import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="font-heading text-sm font-semibold tracking-tight"
      aria-label="Ashish Biswas — home"
    >
      <span className="from-accent-blue to-accent-purple text-primary-foreground shadow-glow inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-br">
        AB
      </span>
    </Link>
  );
}
