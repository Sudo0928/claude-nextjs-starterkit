import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DocSectionContent } from "@/components/docs/section-content";
import { Container } from "@/components/layout/container";
import { docSections, getDocSection } from "@/lib/docs/sections";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return docSections.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getDocSection(slug);
  if (!section) return { title: "문서" };
  return {
    title: section.title,
    description: section.description,
  };
}

export default async function DocSectionPage({ params }: Props) {
  const { slug } = await params;
  const section = getDocSection(slug);
  if (!section) notFound();

  const index = docSections.findIndex((s) => s.id === section.id);
  const prev = index > 0 ? docSections[index - 1] : null;
  const next =
    index < docSections.length - 1 ? docSections[index + 1] : null;
  const Icon = section.icon;

  return (
    <Container className="py-16 sm:py-20">
      <header className="space-y-4 border-b pb-6">
        <Link
          href="/docs"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
        >
          <ChevronLeft className="size-4" />
          문서 목록으로
        </Link>
        <div className="flex items-start gap-3">
          <span className="bg-muted text-muted-foreground inline-flex size-10 shrink-0 items-center justify-center rounded-lg">
            <Icon className="size-5" />
          </span>
          <div className="space-y-2">
            <h1 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {section.title}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-sm leading-7 sm:text-base">
              {section.description}
            </p>
          </div>
        </div>
      </header>

      <article className="mt-10 max-w-3xl">
        <DocSectionContent id={section.id} />
      </article>

      <nav className="mt-16 grid gap-3 border-t pt-6 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/docs/${prev.id}`}
            className="bg-card hover:bg-muted ring-foreground/10 hover:ring-foreground/20 group flex items-center gap-3 rounded-lg p-4 ring-1 transition-colors"
          >
            <ChevronLeft className="text-muted-foreground group-hover:text-foreground size-5 shrink-0 transition-colors" />
            <span className="flex flex-col items-start text-left">
              <span className="text-muted-foreground text-xs">이전</span>
              <span className="text-base font-medium">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/docs/${next.id}`}
            className="bg-card hover:bg-muted ring-foreground/10 hover:ring-foreground/20 group flex items-center justify-end gap-3 rounded-lg p-4 ring-1 transition-colors sm:col-start-2"
          >
            <span className="flex flex-col items-end text-right">
              <span className="text-muted-foreground text-xs">다음</span>
              <span className="text-base font-medium">{next.title}</span>
            </span>
            <ChevronRight className="text-muted-foreground group-hover:text-foreground size-5 shrink-0 transition-colors" />
          </Link>
        ) : null}
      </nav>
    </Container>
  );
}
