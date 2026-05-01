import {
  Accessibility,
  Boxes,
  Languages,
  Moon,
  Palette,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Section } from "@/components/layout/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Zap,
    title: "Next.js 16 + React 19",
    description:
      "최신 App Router·서버 컴포넌트·Turbopack을 즉시 활용할 수 있도록 미리 구성되어 있습니다.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4 + shadcn/ui",
    description:
      "디자인 토큰 기반의 일관된 컴포넌트와 라이트/다크 테마가 기본 적용되어 있습니다.",
  },
  {
    icon: Languages,
    title: "한국어 친화 설정",
    description:
      "lang=\"ko\", Pretendard Variable 폰트, 한국어 메타데이터까지 모두 준비되어 있습니다.",
  },
  {
    icon: Boxes,
    title: "검증된 라이브러리",
    description:
      "Zustand, React Hook Form + Zod, sonner, usehooks-ts 등 표준 도구만 사용합니다.",
  },
  {
    icon: Moon,
    title: "다크 모드 내장",
    description:
      "next-themes 기반 시스템 동기화 + 사용자 토글. 깜빡임 없는 SSR-safe 구현입니다.",
  },
  {
    icon: Accessibility,
    title: "접근성 우선",
    description:
      "Radix UI 기반의 키보드 네비게이션, ARIA 속성, 포커스 관리가 기본입니다.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <div className="mb-12 max-w-2xl">
        <p className="text-primary mb-3 text-sm font-medium">기능</p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          빠르게 시작하기 위한 모든 것
        </h2>
        <p className="text-muted-foreground mt-3 text-base leading-7">
          공통 레이아웃, 폼, 피드백, 상태 관리까지 — 어떤 웹 프로젝트에도
          그대로 활용할 수 있는 베이스를 제공합니다.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <div className="bg-primary/10 text-primary mb-2 inline-flex size-10 items-center justify-center rounded-lg">
                <Icon className="size-5" />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="leading-7">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </Section>
  );
}
