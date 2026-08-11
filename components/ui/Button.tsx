import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ href, children, variant = "primary", className, type = "button", ...props }: Props) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition",
    variant === "primary" && "bg-electric text-white shadow-sm hover:bg-electricHover",
    variant === "secondary" && "border border-white/20 bg-white text-ink hover:border-electric hover:text-electric",
    variant === "ghost" && "border border-ink/10 bg-white/70 text-ink hover:bg-white",
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
