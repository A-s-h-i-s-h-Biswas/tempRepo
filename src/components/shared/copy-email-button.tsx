"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="border-border bg-card text-muted-foreground hover:border-accent-blue/40 hover:text-foreground inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm transition-colors"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? "Copied!" : email}
    </button>
  );
}
