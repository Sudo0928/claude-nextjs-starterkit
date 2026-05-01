import Link from "next/link";
import { ChevronLeft } from "lucide-react";

type ExamplePageHeaderProps = {
  title: string;
  description: string;
};

export function ExamplePageHeader({ title, description }: ExamplePageHeaderProps) {
  return (
    <header className="space-y-4 border-b pb-6">
      <Link
        href="/examples"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
      >
        <ChevronLeft className="size-4" />
        예제 모음으로 돌아가기
      </Link>
      <div className="space-y-2">
        <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-sm leading-7 sm:text-base">
          {description}
        </p>
      </div>
    </header>
  );
}
