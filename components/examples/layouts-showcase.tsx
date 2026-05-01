import { ShowcaseSection } from "@/components/examples/showcase-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LayoutsShowcase() {
  return (
    <div className="space-y-12">
      <ShowcaseSection
        title="반응형 카드 그리드"
        description="모바일은 1열, 태블릿은 2열, 데스크톱은 3열로 변하는 가장 자주 쓰이는 그리드 패턴입니다."
        code={`<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  ...
</div>`}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <Card key={n}>
              <CardHeader>
                <CardTitle>카드 {n}</CardTitle>
                <CardDescription>반응형 그리드 항목</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                화면 너비에 따라 자동으로 열 수가 변경됩니다.
              </CardContent>
            </Card>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="사이드바 + 본문"
        description="좌측 고정 너비 + 우측 가변 본문. 대시보드와 문서 페이지에 적합합니다."
        code={`<div className="grid gap-6 lg:grid-cols-[220px_1fr]">
  <aside>...</aside>
  <main>...</main>
</div>`}
      >
        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="bg-muted/40 ring-foreground/10 rounded-lg p-4 ring-1">
            <p className="text-muted-foreground mb-3 text-xs font-medium tracking-wider uppercase">
              메뉴
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-foreground">대시보드</li>
              <li className="text-muted-foreground">분석</li>
              <li className="text-muted-foreground">설정</li>
            </ul>
          </aside>
          <main className="bg-muted/40 ring-foreground/10 rounded-lg p-6 ring-1">
            <h4 className="font-heading font-medium">대시보드</h4>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              본문 콘텐츠 영역입니다. 가용 너비를 모두 차지합니다.
            </p>
          </main>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="히어로 + 통계"
        description="중앙 정렬 히어로 아래 3분할 통계 영역. 랜딩 페이지에서 자주 쓰입니다."
        code={`<section className="text-center">
  <h2 className="text-3xl font-bold">제목</h2>
  <p className="text-muted-foreground">부제</p>
</section>`}
      >
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              모던한 스타터킷
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              한국어 친화 환경에서 빠르게 시작하세요.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: "컴포넌트", value: "30+" },
              { label: "예제", value: "20+" },
              { label: "다크 모드", value: "✓" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading text-2xl font-bold sm:text-3xl">
                  {s.value}
                </div>
                <div className="text-muted-foreground mt-1 text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="스택 (수직 정렬)"
        description="요소 사이 간격을 일정하게 유지하는 가장 단순한 레이아웃 도구입니다."
        code={`<div className="space-y-4">...</div>`}
      >
        <div className="bg-muted/40 ring-foreground/10 max-w-md space-y-4 rounded-lg p-6 ring-1">
          <div className="bg-background rounded p-3 text-sm">첫 번째 항목</div>
          <div className="bg-background rounded p-3 text-sm">두 번째 항목</div>
          <div className="bg-background rounded p-3 text-sm">세 번째 항목</div>
        </div>
      </ShowcaseSection>
    </div>
  );
}
