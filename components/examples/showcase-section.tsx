import { CodeBlock } from "@/components/common/code-block";
import { cn } from "@/lib/utils";

type ShowcaseSectionProps = {
  title: string;
  description?: string;
  code?: string;
  language?: string;
  children: React.ReactNode;
  className?: string;
  /** 미리보기 영역의 추가 클래스 */
  previewClassName?: string;
};

export function ShowcaseSection({
  title,
  description,
  code,
  language = "tsx",
  children,
  className,
  previewClassName,
}: ShowcaseSectionProps) {
  return (
    <section className={cn("space-y-3", className)}>
      <div>
        <h3 className="font-heading text-base font-semibold tracking-tight">
          {title}
        </h3>
        {description ? (
          <p className="text-muted-foreground mt-1 text-sm leading-6">
            {description}
          </p>
        ) : null}
      </div>
      <div
        className={cn(
          "bg-card rounded-lg border p-6",
          previewClassName
        )}
      >
        {children}
      </div>
      {code ? <CodeBlock code={code} language={language} /> : null}
    </section>
  );
}
