import type { Metadata } from "next";

import { ExamplePageHeader } from "@/components/examples/example-page-header";
import { LayoutsShowcase } from "@/components/examples/layouts-showcase";
import { Container } from "@/components/layout/container";
import { getExample } from "@/lib/examples";

const meta = getExample("layouts");

export const metadata: Metadata = {
  title: meta?.title,
  description: meta?.description,
};

export default function LayoutsExamplePage() {
  return (
    <Container className="py-16 sm:py-20">
      <ExamplePageHeader
        title="레이아웃 예제"
        description="자주 쓰이는 반응형 레이아웃 패턴들을 Tailwind 클래스만으로 구성한 예제입니다."
      />
      <div className="mt-10">
        <LayoutsShowcase />
      </div>
    </Container>
  );
}
