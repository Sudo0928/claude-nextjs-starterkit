"use client";

import { Loader2, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

import { ShowcaseSection } from "@/components/examples/showcase-section";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type Post = { id: number; title: string; body: string };

type Mode = "ok" | "error" | "empty";

export function DataFetchingShowcase() {
  return (
    <div className="space-y-12">
      <FetchExample />
      <OptimisticExample />
    </div>
  );
}

function FetchExample() {
  const [mode, setMode] = useState<Mode>("ok");
  const [data, setData] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async (next: Mode) => {
    setMode(next);
    setLoading(true);
    setError(null);
    setData(null);
    await new Promise((r) => setTimeout(r, 800));
    if (next === "error") {
      setError("요청에 실패했습니다. 다시 시도해 주세요.");
      setLoading(false);
      return;
    }
    if (next === "empty") {
      setData([]);
      setLoading(false);
      return;
    }
    setData([
      { id: 1, title: "첫 번째 게시글", body: "fetch + Skeleton 패턴 데모" },
      { id: 2, title: "두 번째 게시글", body: "에러 처리는 Alert 컴포넌트로" },
      { id: 3, title: "세 번째 게시글", body: "빈 상태도 명시적으로 표시" },
    ]);
    setLoading(false);
  };

  useEffect(() => {
    load("ok");
  }, []);

  return (
    <ShowcaseSection
      title="비동기 상태 (로딩 / 에러 / 빈 상태)"
      description="fetch 결과의 4가지 상태(로딩·성공·에러·빈)를 분리해 처리하는 가장 기본적인 패턴입니다."
      code={`const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);`}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={mode === "ok" ? "default" : "outline"}
            onClick={() => load("ok")}
          >
            <RefreshCw /> 정상 응답
          </Button>
          <Button
            size="sm"
            variant={mode === "empty" ? "default" : "outline"}
            onClick={() => load("empty")}
          >
            빈 결과
          </Button>
          <Button
            size="sm"
            variant={mode === "error" ? "default" : "outline"}
            onClick={() => load("error")}
          >
            에러 발생
          </Button>
        </div>

        <div className="bg-card ring-foreground/10 rounded-lg p-4 ring-1">
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertTitle>오류</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : data && data.length === 0 ? (
            <p className="text-muted-foreground py-6 text-center text-sm">
              표시할 내용이 없습니다.
            </p>
          ) : data ? (
            <ul className="space-y-3">
              {data.map((post) => (
                <li
                  key={post.id}
                  className="border-b pb-3 last:border-b-0 last:pb-0"
                >
                  <p className="font-medium">{post.title}</p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {post.body}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </ShowcaseSection>
  );
}

function OptimisticExample() {
  const [likes, setLikes] = useState(12);
  const [pending, setPending] = useState(false);

  const handleLike = async () => {
    setLikes((l) => l + 1);
    setPending(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
    } finally {
      setPending(false);
    }
  };

  return (
    <ShowcaseSection
      title="낙관적 업데이트 (Optimistic UI)"
      description="요청이 끝나기 전에 UI를 먼저 갱신해 체감 응답 속도를 높입니다. 실패 시 롤백 로직을 추가하세요."
      code={`setLikes((l) => l + 1); // 즉시 갱신
await mutate();          // 백그라운드 요청`}
    >
      <div className="flex items-center gap-3">
        <Button onClick={handleLike} disabled={pending}>
          {pending ? <Loader2 className="animate-spin" /> : null} 좋아요 +1
        </Button>
        <span className="text-muted-foreground text-sm">
          현재 좋아요:{" "}
          <code className="bg-muted rounded px-1.5 py-0.5">{likes}</code>
        </span>
      </div>
    </ShowcaseSection>
  );
}
