"use client";

import { ChevronRight, Mail, Settings } from "lucide-react";

import { ShowcaseSection } from "@/components/examples/showcase-section";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ComponentsShowcase() {
  return (
    <div className="space-y-12">
      <ShowcaseSection
        title="Button"
        description="variant 와 size 조합으로 다양한 버튼을 만들 수 있습니다."
        code={`<Button>기본</Button>
<Button variant="outline">아웃라인</Button>
<Button variant="secondary">보조</Button>
<Button variant="ghost">고스트</Button>
<Button variant="destructive">삭제</Button>
<Button variant="link">링크</Button>`}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Button>기본</Button>
            <Button variant="outline">아웃라인</Button>
            <Button variant="secondary">보조</Button>
            <Button variant="ghost">고스트</Button>
            <Button variant="destructive">삭제</Button>
            <Button variant="link">링크</Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button>기본</Button>
            <Button size="lg">LG</Button>
            <Button size="icon" aria-label="설정">
              <Settings />
            </Button>
            <Button>
              <Mail /> 메일 보내기
            </Button>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Input · Textarea · Label"
        description="React Hook Form 과 함께 사용하기에 적합한 폼 기본 요소입니다."
        code={`<Label htmlFor="email">이메일</Label>
<Input id="email" type="email" placeholder="you@example.com" />`}
      >
        <div className="grid max-w-md gap-4">
          <div className="space-y-2">
            <Label htmlFor="example-email">이메일</Label>
            <Input id="example-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="example-message">메시지</Label>
            <Textarea id="example-message" placeholder="내용을 입력하세요" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Select · Checkbox · Radio · Switch"
        description="Radix UI 기반의 접근성 폼 컨트롤들입니다."
        code={`<Select>
  <SelectTrigger><SelectValue placeholder="선택하세요" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="kr">한국어</SelectItem>
  </SelectContent>
</Select>`}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>언어</Label>
            <Select defaultValue="ko">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ko">한국어</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>알림 받기</Label>
            <div className="flex items-center gap-3">
              <Switch id="notif" defaultChecked />
              <Label htmlFor="notif" className="text-muted-foreground text-sm">
                이메일로 받기
              </Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label>관심 분야</Label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="topic-fe" defaultChecked />
                <Label htmlFor="topic-fe">프론트엔드</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="topic-be" />
                <Label htmlFor="topic-be">백엔드</Label>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label>플랜</Label>
            <RadioGroup defaultValue="pro">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="starter" id="plan-starter" />
                <Label htmlFor="plan-starter">Starter</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="pro" id="plan-pro" />
                <Label htmlFor="plan-pro">Pro</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Badge"
        description="상태 표시, 카테고리 라벨에 사용합니다."
        code={`<Badge>기본</Badge>
<Badge variant="secondary">보조</Badge>
<Badge variant="outline">아웃라인</Badge>
<Badge variant="destructive">위험</Badge>`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge>기본</Badge>
          <Badge variant="secondary">보조</Badge>
          <Badge variant="outline">아웃라인</Badge>
          <Badge variant="destructive">위험</Badge>
          <Badge variant="ghost">고스트</Badge>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Card"
        description="콘텐츠 그룹화의 가장 기본적인 컨테이너입니다."
        code={`<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
    <CardDescription>설명</CardDescription>
  </CardHeader>
  <CardContent>본문</CardContent>
</Card>`}
      >
        <div className="grid max-w-md gap-4">
          <Card>
            <CardHeader>
              <CardTitle>새 프로젝트</CardTitle>
              <CardDescription>5분 안에 시작할 수 있어요.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" variant="outline">
                자세히 보기 <ChevronRight />
              </Button>
            </CardContent>
          </Card>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Avatar · Separator · Skeleton"
        description="사용자 표시, 구분선, 로딩 자리 표시자."
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>홍</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p className="text-sm">위 콘텐츠</p>
            <Separator className="my-3" />
            <p className="text-sm">아래 콘텐츠</p>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Alert"
        description="사용자에게 전달할 정보를 강조합니다."
        code={`<Alert>
  <AlertTitle>알림</AlertTitle>
  <AlertDescription>변경 내용이 저장되었습니다.</AlertDescription>
</Alert>`}
      >
        <div className="space-y-3">
          <Alert>
            <AlertTitle>변경 내용 저장됨</AlertTitle>
            <AlertDescription>
              자동으로 백업이 생성되었습니다.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>오류 발생</AlertTitle>
            <AlertDescription>
              네트워크 연결을 확인한 뒤 다시 시도해 주세요.
            </AlertDescription>
          </Alert>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Tooltip"
        description="짧은 설명·힌트 표시. TooltipProvider 가 root에 필요합니다."
        code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">호버해 보세요</Button>
  </TooltipTrigger>
  <TooltipContent>도움말 텍스트</TooltipContent>
</Tooltip>`}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">호버해 보세요</Button>
          </TooltipTrigger>
          <TooltipContent>도움말이 표시됩니다</TooltipContent>
        </Tooltip>
      </ShowcaseSection>
    </div>
  );
}
