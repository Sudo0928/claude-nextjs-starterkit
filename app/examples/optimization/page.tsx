import type { Metadata } from "next";

import { ExamplePageHeader } from "@/components/examples/example-page-header";
import { OptimizationShowcase } from "@/components/examples/optimization-showcase";
import { Container } from "@/components/layout/container";
import { getExample } from "@/lib/examples";

const meta = getExample("optimization");

export const metadata: Metadata = {
  title: meta?.title,
  description: meta?.description,
};

export default function OptimizationExamplePage() {
  return (
    <Container className="py-16 sm:py-20">
      <ExamplePageHeader
        title="설정 및 최적화"
        description="메타데이터·이미지·코드 분할·폰트 등 Next.js의 핵심 최적화 기능들을 한 자리에서 살펴봅니다."
      />
      <div className="mt-10">
        <OptimizationShowcase />
      </div>
    </Container>
  );
}
