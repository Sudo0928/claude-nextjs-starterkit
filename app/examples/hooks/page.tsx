import type { Metadata } from "next";

import { ExamplePageHeader } from "@/components/examples/example-page-header";
import { HooksShowcase } from "@/components/examples/hooks-showcase";
import { Container } from "@/components/layout/container";
import { getExample } from "@/lib/examples";

const meta = getExample("hooks");

export const metadata: Metadata = {
  title: meta?.title,
  description: meta?.description,
};

export default function HooksExamplePage() {
  return (
    <Container className="py-16 sm:py-20">
      <ExamplePageHeader
        title="usehooks-ts 예제"
        description="자주 사용하는 훅들을 실제 동작과 함께 살펴보세요. 모든 예제는 클라이언트 컴포넌트로 동작합니다."
      />
      <div className="mt-10">
        <HooksShowcase />
      </div>
    </Container>
  );
}
