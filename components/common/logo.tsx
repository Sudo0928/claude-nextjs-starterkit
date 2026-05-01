import Link from "next/link";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-heading text-base font-semibold tracking-tight",
        className
      )}
      aria-label={`${siteConfig.name} 홈으로 이동`}
    >
      <span className="bg-primary text-primary-foreground inline-flex size-7 items-center justify-center rounded-md">
        <Sparkles className="size-4" />
      </span>
      <span>{siteConfig.name}</span>
    </Link>
  );
}
