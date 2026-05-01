"use client";

import { Search, Settings, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { ShowcaseSection } from "@/components/examples/showcase-section";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";

export function PatternsShowcase() {
  return (
    <div className="space-y-12">
      <ShowcaseSection
        title="로그인 폼"
        description="Card + Input + Button 조합. 실제로는 Contact 폼처럼 RHF + Zod 와 결합하세요."
      >
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>계정 정보로 시작하세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("로그인 시도 (데모)");
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="login-email">이메일</Label>
                <Input id="login-email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">비밀번호</Label>
                <Input id="login-password" type="password" />
              </div>
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="확인 다이얼로그"
        description="되돌릴 수 없는 작업 전 사용자 확인을 받을 때 사용합니다."
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 /> 항목 삭제
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
              <AlertDialogDescription>
                이 작업은 되돌릴 수 없습니다. 삭제된 항목은 복구할 수
                없습니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => toast.success("항목이 삭제되었습니다.")}
              >
                삭제
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ShowcaseSection>

      <ShowcaseSection
        title="설정 시트"
        description="Sheet 안에 폼 컨트롤을 배치해 사이드 패널 형태의 설정 UI를 만듭니다."
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Settings /> 설정 열기
            </Button>
          </SheetTrigger>
          <SheetContent className="w-80">
            <SheetHeader>
              <SheetTitle>알림 설정</SheetTitle>
              <SheetDescription>
                받고 싶은 알림 채널을 선택하세요.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 px-4">
              {[
                { id: "n-email", label: "이메일 알림", on: true },
                { id: "n-push", label: "푸시 알림", on: false },
                { id: "n-marketing", label: "마케팅 정보", on: false },
              ].map((row) => (
                <div
                  key={row.id}
                  className="flex items-center justify-between"
                >
                  <Label htmlFor={row.id}>{row.label}</Label>
                  <Switch id={row.id} defaultChecked={row.on} />
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </ShowcaseSection>

      <ShowcaseSection
        title="토스트 알림 (sonner)"
        description="비동기 작업 결과나 가벼운 피드백에 사용합니다. 하단 우측에 표시됩니다."
        code={`import { toast } from "sonner";
toast.success("저장되었습니다");`}
      >
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => toast.success("저장되었습니다.")}>성공</Button>
          <Button
            variant="outline"
            onClick={() => toast.info("새 업데이트가 있습니다.")}
          >
            정보
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.warning("저장 공간이 부족합니다.")}
          >
            경고
          </Button>
          <Button
            variant="destructive"
            onClick={() => toast.error("요청에 실패했습니다.")}
          >
            오류
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 1500)),
                {
                  loading: "저장 중...",
                  success: "저장되었습니다.",
                  error: "오류가 발생했습니다.",
                }
              )
            }
          >
            Promise
          </Button>
        </div>
      </ShowcaseSection>

      <SearchModalExample />
    </div>
  );
}

function SearchModalExample() {
  const [query, setQuery] = useState("");
  const items = [
    "대시보드",
    "사용자 관리",
    "결제 내역",
    "알림 설정",
    "API 키 발급",
  ];
  const filtered = items.filter((i) =>
    i.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <ShowcaseSection
      title="검색 모달"
      description="Dialog + Input 으로 만든 미니멀한 명령 팔레트 패턴입니다."
    >
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Search /> 검색 열기
            <kbd className="bg-muted text-muted-foreground ml-2 hidden rounded px-1.5 py-0.5 text-xs sm:inline">
              ⌘K
            </kbd>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>빠른 이동</DialogTitle>
            <DialogDescription>
              메뉴 이름을 입력해 빠르게 이동하세요.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              autoFocus
              placeholder="검색어를 입력하세요"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <ul className="max-h-60 space-y-1 overflow-y-auto">
              {filtered.length === 0 ? (
                <li className="text-muted-foreground py-6 text-center text-sm">
                  결과가 없습니다.
                </li>
              ) : (
                filtered.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => toast.info(`"${item}"으로 이동`)}
                      className="hover:bg-muted w-full rounded-md px-3 py-2 text-left text-sm transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </ShowcaseSection>
  );
}
