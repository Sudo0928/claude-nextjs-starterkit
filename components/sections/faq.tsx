import { Section } from "@/components/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "이 스타터킷은 어떤 프로젝트에 적합한가요?",
    a: "랜딩 페이지, 마케팅 사이트, SaaS 대시보드의 시작점, 사이드 프로젝트 등 모던 웹 프로젝트 전반에 적합합니다. 핵심 컴포넌트와 인프라가 갖춰져 있어 비즈니스 로직 구현에 집중할 수 있습니다.",
  },
  {
    q: "다크 모드는 어떻게 동작하나요?",
    a: "next-themes를 사용해 시스템 설정에 자동으로 동기화됩니다. 우측 상단 토글로 라이트/다크/시스템을 직접 선택할 수도 있으며, 새로고침 시 깜빡임이 없도록 SSR-safe하게 구현되어 있습니다.",
  },
  {
    q: "한국어 폰트는 어떻게 적용되나요?",
    a: "Pretendard Variable을 CDN에서 로드하여 --font-sans CSS 변수로 연결합니다. self-hosting이 필요하면 next/font/local 방식으로 쉽게 전환할 수 있습니다.",
  },
  {
    q: "어떤 라이브러리가 포함되어 있나요?",
    a: "next-themes, zustand, react-hook-form, zod, sonner, usehooks-ts 등 검증된 표준 라이브러리만 사용합니다. 바퀴를 다시 만들 필요가 없도록 구성했습니다.",
  },
  {
    q: "shadcn 컴포넌트를 추가로 설치할 수 있나요?",
    a: "네, npx shadcn@latest add <컴포넌트명> 으로 언제든 추가할 수 있습니다. 기본 components.json은 radix-nova 스타일로 설정되어 있습니다.",
  },
];

export function FAQ() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-primary mb-3 text-sm font-medium">FAQ</p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            자주 묻는 질문
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-7">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
