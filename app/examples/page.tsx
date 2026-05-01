import type { Metadata } from "next";

import { ExampleCard } from "@/components/examples/example-card";
import { Container } from "@/components/layout/container";
import { examples } from "@/lib/examples";

export const metadata: Metadata = {
  title: "예제",
  description:
    "스타터킷에 포함된 UI 컴포넌트와 자주 쓰이는 패턴을 한 자리에서 살펴보세요.",
};

export default function ExamplesPage() {
  return (
    <Container className="py-16 sm:py-20">
      <header className="mx-auto max-w-2xl space-y-3 text-center">
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          예제 모음
        </h1>
        <p className="text-muted-foreground text-sm leading-7 sm:text-base">
          실제 동작하는 예제를 통해 스타터킷의 모든 기능을 탐색해보세요. 각
          예제는 소스 코드와 함께 제공됩니다.
        </p>
      </header>

      <div className="mx-auto mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example) => (
          <ExampleCard
            key={example.slug}
            icon={example.icon}
            title={example.title}
            description={example.description}
            tags={example.tags}
            href={`/examples/${example.slug}`}
          />
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <div className="bg-muted/40 ring-foreground/10 flex items-start justify-center gap-2 rounded-full px-6 py-3 text-center text-sm ring-1">
          <span aria-hidden>💡</span>
          <span className="text-muted-foreground">
            각 예제는 실제 코드와 함께 제공되며 자유롭게 복사하여 사용할 수
            있습니다.
          </span>
        </div>
      </div>
    </Container>
  );
}
