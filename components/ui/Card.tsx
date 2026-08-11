import { cn } from "@/lib/utils";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card", className)}>{children}</div>;
}
