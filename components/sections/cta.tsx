import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

export function CTA() {
  return (
    <Section className="pb-24">
      <div className="bg-primary/5 border-primary/10 relative overflow-hidden rounded-2xl border p-10 sm:p-16">
        <div
          aria-hidden
          className="bg-primary/20 pointer-events-none absolute -right-20 -bottom-32 size-96 rounded-full blur-3xl"
        />
        <div className="relative max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            지금 바로 다음 프로젝트를 시작해 보세요
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-7">
            복잡한 설정 없이, 잘 설계된 베이스 위에서 곧바로 만들고 싶은
            제품에 집중하세요.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                무료로 시작하기 <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#pricing">요금제 보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
