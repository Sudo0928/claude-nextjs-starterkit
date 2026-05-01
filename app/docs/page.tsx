import type { Metadata } from "next";

import { DocCard } from "@/components/docs/doc-card";
import { Container } from "@/components/layout/container";
import { docSections } from "@/lib/docs/sections";

export const metadata: Metadata = {
  title: "문서",
  description: "스타터킷 사용을 위한 설치, 폴더 구조, 테마, 상태 관리 가이드.",
};

export default function DocsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <header className="mx-auto max-w-2xl space-y-3 text-center">
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          문서
        </h1>
        <p className="text-muted-foreground text-sm leading-7 sm:text-base">
          NextJS 스타터킷 사용법과 모든 기능에 대한 상세한 가이드를 제공합니다.
        </p>
      </header>

      <div className="mx-auto mt-12 grid gap-6 sm:mt-14 md:grid-cols-2">
        {docSections.map((section) => (
          <DocCard
            key={section.id}
            icon={section.icon}
            title={section.title}
            description={section.description}
            bullets={section.bullets}
            href={`/docs/${section.id}`}
          />
        ))}
      </div>
    </Container>
  );
}
