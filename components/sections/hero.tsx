import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-20 sm:pt-28">
      <div
        aria-hidden
        className="bg-primary/10 pointer-events-none absolute -top-32 left-1/2 -z-10 size-[640px] -translate-x-1/2 rounded-full blur-3xl"
      />
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-6">
          Next.js 16 · React 19 · Tailwind v4
        </Badge>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl md:leading-[1.1]">
          모던 웹의 시작을
          <br />
          <span className="text-primary">한 줄의 명령으로</span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-base leading-7 text-pretty sm:text-lg">
          한국어 환경에 최적화된 Next.js 스타터킷. 디자인 시스템·테마·폼·상태
          관리까지 모두 준비되어 있어, 만들고 싶은 것에만 집중할 수 있습니다.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              지금 시작하기 <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Code /> 소스 보기
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
