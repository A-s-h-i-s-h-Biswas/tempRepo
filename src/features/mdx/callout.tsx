import { AlertTriangle, Info, OctagonAlert } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const styles = {
  info: {
    icon: Info,
    className: "border-accent-blue/30 bg-accent-blue/5 text-accent-blue",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-amber-500/30 bg-amber-500/5 text-amber-500",
  },
  danger: {
    icon: OctagonAlert,
    className: "border-destructive/30 bg-destructive/5 text-destructive",
  },
} as const;

interface CalloutProps {
  type?: keyof typeof styles;
  children: ReactNode;
}

export function Callout({ type = "info", children }: CalloutProps) {
  const { icon: Icon, className } = styles[type];

  return (
    <div
      className={cn("my-6 flex gap-3 rounded-xl border p-4 text-sm", className)}
    >
      <Icon className="mt-0.5 size-4 shrink-0" />
      <div className="text-foreground/90 [&>p]:m-0">{children}</div>
    </div>
  );
}
