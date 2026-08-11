import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? <p className={cn("mb-3 text-sm font-bold uppercase tracking-[0.18em]", light ? "text-white/70" : "text-electric")}>{eyebrow}</p> : null}
      <h2 className={cn("font-display text-3xl font-bold tracking-tight md:text-5xl", light ? "text-white" : "text-ink")}>{title}</h2>
      {text ? <p className={cn("mt-5 text-lg leading-8", light ? "text-white/72" : "text-muted")}>{text}</p> : null}
    </div>
  );
}
