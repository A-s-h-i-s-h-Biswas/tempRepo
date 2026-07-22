export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="bg-background pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="animate-aurora-drift bg-accent-blue/30 absolute -top-1/3 left-1/4 h-[36rem] w-[36rem] rounded-full blur-[120px]" />
      <div className="animate-aurora-drift-slow bg-accent-purple/25 absolute top-1/4 -right-1/4 h-[32rem] w-[32rem] rounded-full blur-[130px]" />
      <div className="animate-aurora-drift bg-accent-cyan/20 absolute -bottom-1/4 left-1/3 h-[30rem] w-[30rem] rounded-full blur-[130px] [animation-delay:-6s]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_75%)]" />
    </div>
  );
}
