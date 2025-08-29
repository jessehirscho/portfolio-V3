"use client"
import * as React from "react"
import { twMerge } from "tailwind-merge"

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "secondary" | "outline"
}

export const Badge = ({ className, variant = "default", ...props }: BadgeProps) => {
  const base = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold"
  const styles: Record<NonNullable<BadgeProps["variant"]>, string> = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border-border text-foreground",
  }
  return <div className={twMerge(base, styles[variant], className)} {...props} />
}


