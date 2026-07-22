"use client";

import {
  Cloud,
  Database,
  ListOrdered,
  Monitor,
  ShieldCheck,
  Waypoints,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { ArchitectureIconKey, ArchitectureNode } from "@/types/project";

const iconMap: Record<ArchitectureIconKey, typeof Monitor> = {
  frontend: Monitor,
  gateway: Waypoints,
  auth: ShieldCheck,
  cache: Zap,
  queue: ListOrdered,
  database: Database,
  cloud: Cloud,
};

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
}

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  const [selectedId, setSelectedId] = useState(nodes[0]?.id);
  const selected = nodes.find((node) => node.id === selectedId) ?? nodes[0];

  return (
    <div>
      <div className="no-scrollbar flex flex-wrap items-center gap-x-1 gap-y-3 sm:flex-nowrap sm:overflow-x-auto">
        {nodes.map((node, index) => {
          const Icon = iconMap[node.icon];
          const isSelected = node.id === selectedId;

          return (
            <div key={node.id} className="flex shrink-0 items-center">
              <button
                type="button"
                onClick={() => setSelectedId(node.id)}
                aria-pressed={isSelected}
                className={cn(
                  "flex shrink-0 flex-col items-center gap-2 rounded-xl border px-4 py-3 text-center transition-all duration-200",
                  isSelected
                    ? "border-accent-blue bg-accent-blue/10 shadow-glow"
                    : "border-border bg-card hover:border-accent-blue/40",
                )}
              >
                <Icon
                  className={cn(
                    "size-5",
                    isSelected ? "text-accent-blue" : "text-muted-foreground",
                  )}
                />
                <span className="text-xs font-medium whitespace-nowrap">
                  {node.label}
                </span>
              </button>

              {index < nodes.length - 1 && (
                <div className="bg-border relative mx-1 h-px w-6 shrink-0 overflow-hidden sm:w-10">
                  <span className="animate-pulse-travel bg-accent-blue absolute inset-y-0 left-0 w-2" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selected && (
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="glass mt-6 rounded-xl p-5"
        >
          <p className="text-accent-blue text-sm font-semibold">
            {selected.label}
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            {selected.description}
          </p>
        </motion.div>
      )}
    </div>
  );
}
