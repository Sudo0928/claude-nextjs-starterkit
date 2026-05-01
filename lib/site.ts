import { AtSign, Briefcase, Code } from "lucide-react";

import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Starter Kit",
  description:
    "Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui로 만든 한국어 친화 스타터킷입니다. 어떤 웹사이트도 빠르게 시작하세요.",
  url: "https://example.com",
  ogImage: "https://example.com/og.png",
  nav: [
    { title: "기능", href: "/#features" },
    { title: "요금제", href: "/#pricing" },
    { title: "예제", href: "/examples" },
    { title: "문서", href: "/docs" },
    { title: "문의", href: "/contact" },
  ],
  footerNav: [
    {
      title: "제품",
      items: [
        { title: "기능", href: "/#features" },
        { title: "요금제", href: "/#pricing" },
        { title: "예제", href: "/examples" },
        { title: "문서", href: "/docs" },
      ],
    },
    {
      title: "회사",
      items: [
        { title: "소개", href: "#" },
        { title: "블로그", href: "#" },
        { title: "채용", href: "#" },
      ],
    },
    {
      title: "지원",
      items: [
        { title: "문의하기", href: "/contact" },
        { title: "도움말", href: "#" },
        { title: "상태 페이지", href: "#" },
      ],
    },
    {
      title: "법적 고지",
      items: [
        { title: "이용약관", href: "#" },
        { title: "개인정보처리방침", href: "#" },
      ],
    },
  ],
  social: [
    { label: "GitHub", href: "https://github.com", icon: Code },
    { label: "Twitter", href: "https://twitter.com", icon: AtSign },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Briefcase },
  ],
};
