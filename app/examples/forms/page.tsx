import type { Metadata } from "next";

import { ExamplePageHeader } from "@/components/examples/example-page-header";
import { FormsShowcase } from "@/components/examples/forms-showcase";
import { Container } from "@/components/layout/container";
import { getExample } from "@/lib/examples";

const meta = getExample("forms");

export const metadata: Metadata = {
  title: meta?.title,
  description: meta?.description,
};

export default function FormsExamplePage() {
  return (
    <Container className="py-16 sm:py-20">
      <ExamplePageHeader
        title="폼 예제"
        description="react-hook-form과 zod를 활용해 검증·상태 관리·교차 필드 검사 패턴을 구현하는 방법입니다."
      />
      <div className="mt-10">
        <FormsShowcase />
      </div>
    </Container>
  );
}
