import type { Metadata } from "next";

import { DataFetchingShowcase } from "@/components/examples/data-fetching-showcase";
import { ExamplePageHeader } from "@/components/examples/example-page-header";
import { Container } from "@/components/layout/container";
import { getExample } from "@/lib/examples";

const meta = getExample("data-fetching");

export const metadata: Metadata = {
  title: meta?.title,
  description: meta?.description,
};

export default function DataFetchingExamplePage() {
  return (
    <Container className="py-16 sm:py-20">
      <ExamplePageHeader
        title="데이터 페칭"
        description="비동기 요청의 로딩·에러·빈 상태와 낙관적 업데이트 패턴을 다룹니다."
      />
      <div className="mt-10">
        <DataFetchingShowcase />
      </div>
    </Container>
  );
}
