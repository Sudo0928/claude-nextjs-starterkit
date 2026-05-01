import type { Metadata } from "next";

import { ComponentsShowcase } from "@/components/examples/components-showcase";
import { ExamplePageHeader } from "@/components/examples/example-page-header";
import { PatternsShowcase } from "@/components/examples/patterns-showcase";
import { Container } from "@/components/layout/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getExample } from "@/lib/examples";

const meta = getExample("components");

export const metadata: Metadata = {
  title: meta?.title,
  description: meta?.description,
};

export default function ComponentsExamplePage() {
  return (
    <Container className="py-16 sm:py-20">
      <ExamplePageHeader
        title="컴포넌트 쇼케이스"
        description="모든 UI 컴포넌트의 실제 동작을 확인하고 자주 쓰이는 패턴 구현 방식을 살펴보세요."
      />
      <div className="mt-10">
        <Tabs defaultValue="components">
          <TabsList>
            <TabsTrigger value="components">컴포넌트</TabsTrigger>
            <TabsTrigger value="patterns">패턴</TabsTrigger>
          </TabsList>
          <TabsContent value="components" className="mt-8">
            <ComponentsShowcase />
          </TabsContent>
          <TabsContent value="patterns" className="mt-8">
            <PatternsShowcase />
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
}
