import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "default" | "sm"
  className?: string
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer",
        size === "default" && "h-14 gap-3 px-12 text-base",
        size === "sm" && "h-10 px-5 text-sm",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:ring-4 hover:ring-primary/20",
        variant === "secondary" &&
          "border border-border bg-transparent text-foreground hover:bg-muted hover:ring-4 hover:ring-muted",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight
        className={cn(
          "relative z-10 transition-transform duration-300 group-hover:translate-x-1",
          size === "default" ? "h-5 w-5" : "h-4 w-4"
        )}
        aria-hidden="true"
      />
    </a>
  )
}
