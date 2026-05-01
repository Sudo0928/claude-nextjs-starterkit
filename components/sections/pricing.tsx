import Link from "next/link";
import { Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₩0",
    unit: "/월",
    description: "개인 프로젝트와 학습용으로 가볍게.",
    features: ["페이지 무제한", "기본 컴포넌트", "커뮤니티 지원"],
    cta: { label: "무료 시작", href: "/contact" },
  },
  {
    name: "Pro",
    price: "₩29,000",
    unit: "/월",
    description: "성장하는 팀을 위한 확장형 플랜.",
    features: [
      "Starter의 모든 기능",
      "프리미엄 컴포넌트",
      "이메일 지원",
      "분석 대시보드",
    ],
    cta: { label: "프로 시작하기", href: "/contact" },
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "맞춤",
    description: "보안·확장성·전담 지원이 필요한 조직.",
    features: ["Pro의 모든 기능", "SSO / SAML", "전담 매니저", "SLA 보장"],
    cta: { label: "문의하기", href: "/contact" },
  },
];

export function Pricing() {
  return (
    <Section id="pricing" className="bg-muted/30">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-primary mb-3 text-sm font-medium">요금제</p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          당신의 단계에 맞는 플랜
        </h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-base leading-7">
          작게 시작하고, 필요할 때 확장하세요. 모든 플랜에서 핵심 기능을
          제한 없이 사용할 수 있습니다.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col",
              plan.highlight && "ring-primary border-primary ring-2"
            )}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                {plan.highlight ? <Badge>추천</Badge> : null}
              </div>
              <CardDescription className="leading-7">
                {plan.description}
              </CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                {plan.unit ? (
                  <span className="text-muted-foreground text-sm">
                    {plan.unit}
                  </span>
                ) : null}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm leading-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="text-primary mt-0.5 size-4 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="bg-transparent">
              <Button
                asChild
                className="w-full"
                variant={plan.highlight ? "default" : "outline"}
              >
                <Link href={plan.cta.href}>{plan.cta.label}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
