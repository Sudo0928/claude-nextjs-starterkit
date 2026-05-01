import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DocCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  href: string;
};

export function DocCard({
  icon: Icon,
  title,
  description,
  bullets,
  href,
}: DocCardProps) {
  return (
    <Link
      href={href}
      className="focus-visible:ring-ring/50 group block rounded-xl outline-none focus-visible:ring-3"
    >
      <Card className="bg-card/60 ring-foreground/10 group-hover:ring-primary/40 h-full transition-all group-hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-base">
            <span className="bg-muted text-muted-foreground inline-flex size-10 items-center justify-center rounded-lg">
              <Icon className="size-5" />
            </span>
            <span className="font-heading text-lg font-semibold tracking-tight">
              {title}
            </span>
          </CardTitle>
          <CardDescription className="mt-2 leading-6">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pb-4">
          <p className="text-muted-foreground text-xs font-medium">주요 내용</p>
          <ul className="space-y-1.5">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="text-foreground/90 flex items-start gap-2 text-sm"
              >
                <span className="bg-foreground/40 mt-2 inline-block size-1 shrink-0 rounded-full" />
                <span className="leading-6">{bullet}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Link>
  );
}
