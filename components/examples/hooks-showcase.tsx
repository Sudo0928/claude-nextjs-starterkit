"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import {
  useCopyToClipboard,
  useDebounceValue,
  useLocalStorage,
  useMediaQuery,
} from "usehooks-ts";

import { ShowcaseSection } from "@/components/examples/showcase-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function HooksShowcase() {
  return (
    <div className="space-y-12">
      <DebounceExample />
      <LocalStorageExample />
      <MediaQueryExample />
      <CopyToClipboardExample />
    </div>
  );
}

function DebounceExample() {
  const [value, setValue] = useState("");
  const [debounced] = useDebounceValue(value, 500);

  return (
    <ShowcaseSection
      title="useDebounceValue"
      description="입력값이 멈춘 뒤 지정된 시간이 지나야 갱신됩니다. 검색·자동저장에 유용합니다."
      code={`const [debounced] = useDebounceValue(value, 500);`}
    >
      <div className="grid max-w-sm gap-3">
        <Label htmlFor="debounce-input">입력 (500ms 디바운스)</Label>
        <Input
          id="debounce-input"
          placeholder="빠르게 입력해 보세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="text-muted-foreground text-sm">
          현재 값: <code className="bg-muted rounded px-1">{value || "—"}</code>
        </p>
        <p className="text-muted-foreground text-sm">
          디바운스 값:{" "}
          <code className="bg-muted rounded px-1">{debounced || "—"}</code>
        </p>
      </div>
    </ShowcaseSection>
  );
}

function LocalStorageExample() {
  const [count, setCount] = useLocalStorage("hooks-showcase-count", 0);

  return (
    <ShowcaseSection
      title="useLocalStorage"
      description="값이 자동으로 localStorage에 저장됩니다. 새로고침해도 유지됩니다."
      code={`const [count, setCount] = useLocalStorage("counter", 0);`}
    >
      <div className="space-y-3">
        <p className="text-sm">
          저장된 값:{" "}
          <code className="bg-muted rounded px-1.5 py-0.5">{count}</code>
        </p>
        <div className="flex gap-2">
          <Button size="sm" onClick={() => setCount((c) => c + 1)}>
            증가
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setCount((c) => c - 1)}
          >
            감소
          </Button>
          <Button size="sm" variant="ghost" onClick={() => setCount(0)}>
            초기화
          </Button>
        </div>
        <p className="text-muted-foreground text-xs">
          페이지를 새로고침해도 값이 유지됩니다.
        </p>
      </div>
    </ShowcaseSection>
  );
}

function MediaQueryExample() {
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ShowcaseSection
      title="useMediaQuery"
      description="미디어 쿼리 매치 여부를 React 상태로 받습니다."
      code={`const isLg = useMediaQuery("(min-width: 1024px)");`}
    >
      <ul className="space-y-1.5 text-sm">
        <li>
          ≥ 768px (md): <Result value={isMd} />
        </li>
        <li>
          ≥ 1024px (lg): <Result value={isLg} />
        </li>
        <li>
          시스템 다크 모드 선호: <Result value={prefersDark} />
        </li>
      </ul>
    </ShowcaseSection>
  );
}

function Result({ value }: { value: boolean }) {
  return (
    <code
      className={
        value
          ? "bg-primary/10 text-primary rounded px-1.5 py-0.5"
          : "bg-muted text-muted-foreground rounded px-1.5 py-0.5"
      }
    >
      {value ? "true" : "false"}
    </code>
  );
}

function CopyToClipboardExample() {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  const text = "스타터킷에서 가져온 텍스트";

  const handleCopy = async () => {
    const ok = await copy(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <ShowcaseSection
      title="useCopyToClipboard"
      description="비동기 클립보드 API를 안전하게 감싸 줍니다."
      code={`const [, copy] = useCopyToClipboard();
await copy(text);`}
    >
      <div className="flex items-center gap-3">
        <code className="bg-muted rounded px-2 py-1 text-sm">{text}</code>
        <Button size="sm" variant="outline" onClick={handleCopy}>
          {copied ? <Check /> : <Copy />}
          {copied ? "복사됨" : "복사"}
        </Button>
      </div>
    </ShowcaseSection>
  );
}
