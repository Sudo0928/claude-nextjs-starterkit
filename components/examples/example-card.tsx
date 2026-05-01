import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ExampleCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export function ExampleCard({
  icon: Icon,
  title,
  description,
  tags,
  href,
}: ExampleCardProps) {
  return (
    <Card className="bg-card/60 ring-foreground/10 hover:ring-primary/40 h-full transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <span className="bg-muted text-muted-foreground inline-flex size-9 items-center justify-center rounded-lg">
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
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-transparent">
        <Button asChild variant="secondary" className="w-full">
          <Link href={href}>예제 보기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
