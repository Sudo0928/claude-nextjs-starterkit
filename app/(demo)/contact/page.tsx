import type { Metadata } from "next";

import { PageHeader } from "@/components/common/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "문의하기",
  description: "프로젝트, 협업, 기술적인 질문 등 어떤 내용이든 편하게 보내 주세요.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHeader
        title="문의하기"
        description="프로젝트, 협업, 기술적인 질문 등 어떤 내용이든 편하게 보내 주세요. 영업일 기준 1-2일 안에 답변드립니다."
      />
      <div className="mt-10 max-w-2xl">
        <ContactForm />
      </div>
    </Container>
  );
}
