import { CodeBlock } from "@/components/common/code-block";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function Intro() {
  return (
    <>
      <p>
        이 스타터킷은 Next.js 16 App Router · React 19 · TypeScript · Tailwind
        CSS v4 · shadcn/ui 를 기반으로, 한국어 환경의 모던 웹 프로젝트를 빠르게
        시작할 수 있도록 만들어졌습니다.
      </p>
      <p className="text-muted-foreground">
        다크 모드, 폼/검증, 전역 상태, 토스트 알림 등 어떤 웹에도 필요한 구성
        요소를 미리 갖추고 있어, 비즈니스 로직 구현에 바로 집중할 수 있습니다.
      </p>
    </>
  );
}

function Install() {
  return (
    <>
      <p>저장소를 받은 뒤 의존성을 설치하고 개발 서버를 실행합니다.</p>
      <CodeBlock
        language="bash"
        code={`npm install
npm run dev   # http://localhost:3000`}
      />
      <p>프로덕션 빌드와 정적 검사도 동일한 방식으로 사용할 수 있습니다.</p>
      <CodeBlock
        language="bash"
        code={`npm run lint
npm run build
npm run start`}
      />
    </>
  );
}

function Structure() {
  return (
    <>
      <p>
        라우팅(<code>app/</code>)과 재사용 단위(<code>components/</code>)를
        분리하고, 컴포넌트는 의존 방향에 따라 5개 계층으로 정리했습니다.
      </p>
      <CodeBlock
        language="text"
        code={`app/                  라우트와 페이지 셸
components/
  ui/                 shadcn primitives (Radix 기반)
  common/             앱 전반 재사용 (Logo, ThemeToggle, CodeBlock ...)
  layout/             페이지 셸 (Header, Footer, Container, Section)
  sections/           랜딩 단위 블록 (Hero, Features, Pricing ...)
  forms/              도메인 폼 (ContactForm ...)
lib/
  utils.ts            cn()
  site.ts             siteConfig (단일 출처)
  schemas/            Zod 스키마
  docs/               문서 메타데이터
stores/               Zustand 스토어
hooks/                커스텀 훅
types/                공통 타입`}
      />
      <p className="text-muted-foreground">
        의존 방향은 <strong>아래 → 위</strong> 단방향만 허용합니다 (Pages →
        Sections → Layout/Common → Primitives). 순환 참조를 만들지 않도록
        주의하세요.
      </p>
    </>
  );
}

function Theme() {
  return (
    <>
      <p>
        색상·간격·반경 등 모든 디자인 토큰은 CSS 변수로 정의되어 라이트/다크
        모드에서 동일한 코드로 동작합니다. <code>app/globals.css</code> 에서
        토큰을 직접 수정할 수 있습니다.
      </p>
      <CodeBlock
        language="css"
        code={`:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... */
}`}
      />
      <p>
        다크 모드는 <code>next-themes</code> 가 처리합니다. 사용자 토글은
        헤더의 테마 버튼(<code>components/common/theme-toggle.tsx</code>)에서
        조작할 수 있습니다.
      </p>
    </>
  );
}

function Components() {
  return (
    <>
      <p>
        새로운 shadcn 컴포넌트는 CLI 한 줄로 추가할 수 있습니다. 추가된 컴포넌트는{" "}
        <code>components/ui/</code> 로 들어옵니다.
      </p>
      <CodeBlock
        language="bash"
        code={`npx shadcn@latest add table calendar command popover`}
      />
      <p>
        스타일은 <code>components.json</code> 의{" "}
        <code>style: &quot;radix-nova&quot;</code> 가 그대로 적용됩니다. 색상이나
        반경을 바꾸고 싶다면 <code>app/globals.css</code> 의 토큰을 조정하세요.
      </p>
    </>
  );
}

function State() {
  return (
    <>
      <p>
        전역 UI 상태는 Zustand 를 사용합니다.{" "}
        <code>stores/use-ui-store.ts</code> 가 모바일 네비 열림/닫힘 상태를
        관리하는 예시입니다.
      </p>
      <CodeBlock
        code={`import { create } from "zustand";

type UIStore = {
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
};

export const useUIStore = create<UIStore>((set) => ({
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
}));`}
      />
      <p className="text-muted-foreground">
        서버 상태(API 응답 캐시)가 필요해지면{" "}
        <code>@tanstack/react-query</code> 추가를 권장합니다.
      </p>
    </>
  );
}

function Forms() {
  return (
    <>
      <p>
        모든 폼은 <code>react-hook-form</code> + <code>zod</code> 조합을 기본으로
        합니다. 스키마는 <code>lib/schemas/</code> 에 분리해 관리하면 타입 추론까지
        자동으로 연결됩니다.
      </p>
      <CodeBlock
        code={`import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";

const form = useForm<ContactInput>({
  resolver: zodResolver(contactSchema),
  defaultValues: { name: "", email: "", message: "" },
});`}
      />
      <p>
        실제 동작 예시는 <code>app/(demo)/contact/page.tsx</code> 의 ContactForm
        을 참고하세요.
      </p>
    </>
  );
}

function Routing() {
  return (
    <>
      <p>
        App Router 의 특수 파일이 모두 준비되어 있습니다. 새 페이지는{" "}
        <code>app/&lt;경로&gt;/page.tsx</code> 를 추가하기만 하면 됩니다.
      </p>
      <CodeBlock
        language="text"
        code={`app/
  layout.tsx        루트 레이아웃 (Header / Footer)
  page.tsx          /
  loading.tsx       /
  not-found.tsx     없는 경로
  error.tsx         런타임 오류
  (demo)/contact/   라우트 그룹 — URL 에 영향 없음
  examples/
  docs/`}
      />
      <Alert>
        <AlertTitle>한 줄 팁</AlertTitle>
        <AlertDescription>
          정적인 페이지는 서버 컴포넌트로 두고, 상태/이펙트가 필요할 때만{" "}
          <code>&quot;use client&quot;</code> 를 추가하세요. 번들 크기와 초기 로딩에
          유리합니다.
        </AlertDescription>
      </Alert>
    </>
  );
}

function Deploy() {
  return (
    <>
      <p>
        Vercel 에 가장 빠르게 배포할 수 있습니다. GitHub 저장소를 연결하면 push
        시 자동으로 빌드·배포됩니다. 그 외 Node 런타임을 지원하는 모든
        호스팅(예: Cloudflare, AWS, Fly.io)에도 동일하게 동작합니다.
      </p>
      <CodeBlock
        language="bash"
        code={`# 프로덕션 번들 생성
npm run build

# 프로덕션 서버 실행
npm run start`}
      />
    </>
  );
}

const sectionComponents: Record<string, () => React.ReactNode> = {
  intro: Intro,
  install: Install,
  structure: Structure,
  theme: Theme,
  components: Components,
  state: State,
  forms: Forms,
  routing: Routing,
  deploy: Deploy,
};

export function DocSectionContent({ id }: { id: string }) {
  const Component = sectionComponents[id];
  if (!Component) return null;
  return (
    <div className="space-y-4 text-sm leading-7 sm:text-base">
      <Component />
    </div>
  );
}
