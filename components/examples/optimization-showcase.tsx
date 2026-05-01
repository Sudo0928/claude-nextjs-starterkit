import { ShowcaseSection } from "@/components/examples/showcase-section";

export function OptimizationShowcase() {
  return (
    <div className="space-y-12">
      <ShowcaseSection
        title="페이지별 메타데이터"
        description="App Router의 Metadata API로 페이지마다 SEO 정보를 정의합니다. 루트 layout의 template과 자동 결합됩니다."
        code={`// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사 소개",
  description: "스타터킷을 만든 사람들 이야기",
};`}
        language="tsx"
      >
        <p className="text-muted-foreground text-sm leading-7">
          정적 메타데이터는 빌드 시 결정되고, 동적 메타데이터가 필요하면{" "}
          <code>generateMetadata</code> 함수를 export 하세요.
        </p>
      </ShowcaseSection>

      <ShowcaseSection
        title="이미지 최적화 (next/image)"
        description="자동 포맷 변환·반응형 사이즈·지연 로딩이 기본으로 활성화됩니다."
        code={`import Image from "next/image";

<Image
  src="/og.png"
  alt="대표 이미지"
  width={1200}
  height={630}
  priority
/>`}
        language="tsx"
      >
        <ul className="text-muted-foreground space-y-1.5 text-sm leading-6">
          <li>• AVIF/WebP 자동 변환 — 원본보다 최대 70% 작게</li>
          <li>• <code>priority</code> 로 LCP 이미지 즉시 로드</li>
          <li>
            • 외부 도메인은 <code>next.config.ts</code> 의{" "}
            <code>images.remotePatterns</code> 에 등록
          </li>
        </ul>
      </ShowcaseSection>

      <ShowcaseSection
        title="코드 분할 (next/dynamic)"
        description="필요한 시점에 컴포넌트를 동적으로 불러와 초기 번들 크기를 줄입니다."
        code={`import dynamic from "next/dynamic";

const Chart = dynamic(() => import("@/components/chart"), {
  loading: () => <Skeleton className="h-64" />,
  ssr: false, // 브라우저에서만 렌더링
});`}
        language="tsx"
      >
        <p className="text-muted-foreground text-sm leading-7">
          무거운 차트·에디터·지도 라이브러리에 적용해 첫 페인트를 빠르게
          만드세요.
        </p>
      </ShowcaseSection>

      <ShowcaseSection
        title="loading.tsx로 점진 로딩"
        description="라우트 단위 로딩 UI는 별도 파일 하나로 끝납니다. 데이터가 준비되는 동안 자동 표시됩니다."
        code={`// app/blog/loading.tsx
export default function Loading() {
  return <Skeleton className="h-32 w-full" />;
}`}
        language="tsx"
      >
        <p className="text-muted-foreground text-sm leading-7">
          이미 <code>app/loading.tsx</code> 가 루트에 추가되어 있어, 새 라우트가
          데이터를 가져오는 동안 자동으로 사용됩니다.
        </p>
      </ShowcaseSection>

      <ShowcaseSection
        title="font 최적화 (next/font)"
        description="런타임 외부 요청 없이 폰트를 자체 호스팅합니다. CLS(레이아웃 이동)도 자동 방지됩니다."
        code={`import { Geist_Mono } from "next/font/google";

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});`}
        language="tsx"
      >
        <p className="text-muted-foreground text-sm leading-7">
          이 스타터킷은 한글 본문에 Pretendard, 코드에 Geist Mono를 사용합니다.
          <code>app/layout.tsx</code> 에서 확인할 수 있습니다.
        </p>
      </ShowcaseSection>
    </div>
  );
}
