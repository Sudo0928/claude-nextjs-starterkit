"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { ShowcaseSection } from "@/components/examples/showcase-section";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const loginSchema = z.object({
  email: z.string().email({ message: "올바른 이메일 주소를 입력해 주세요." }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
});
type LoginInput = z.infer<typeof loginSchema>;

const signupSchema = z
  .object({
    name: z.string().min(2, { message: "이름은 2자 이상 입력해 주세요." }),
    email: z.string().email({ message: "올바른 이메일 주소를 입력해 주세요." }),
    password: z
      .string()
      .min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
    confirm: z.string(),
    agree: z.literal(true, { message: "약관에 동의해 주세요." }),
  })
  .refine((d) => d.password === d.confirm, {
    path: ["confirm"],
    message: "비밀번호가 일치하지 않습니다.",
  });
type SignupInput = z.infer<typeof signupSchema>;

const newsletterSchema = z.object({
  email: z.string().email({ message: "올바른 이메일 주소를 입력해 주세요." }),
});
type NewsletterInput = z.infer<typeof newsletterSchema>;

export function FormsShowcase() {
  return (
    <div className="space-y-12">
      <ShowcaseSection
        title="로그인 폼"
        description="이메일·비밀번호 검증과 제출 상태 처리를 보여주는 가장 기본적인 폼입니다."
      >
        <LoginForm />
      </ShowcaseSection>

      <ShowcaseSection
        title="회원가입 폼"
        description="비밀번호 일치 검증과 약관 동의 같은 교차 검증 패턴입니다."
      >
        <SignupForm />
      </ShowcaseSection>

      <ShowcaseSection
        title="뉴스레터 구독"
        description="단일 입력 + 인라인 에러 표시. 작은 폼은 Label 없이도 사용성을 유지할 수 있습니다."
      >
        <NewsletterForm />
      </ShowcaseSection>
    </div>
  );
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginInput) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("로그인 성공 (데모)", { description: data.email });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid max-w-sm gap-4"
      noValidate
    >
      <Field id="login-email" label="이메일" error={errors.email?.message}>
        <Input
          id="login-email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </Field>
      <Field
        id="login-password"
        label="비밀번호"
        error={errors.password?.message}
      >
        <Input
          id="login-password"
          type="password"
          autoComplete="current-password"
          aria-invalid={!!errors.password}
          {...register("password")}
        />
      </Field>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" /> 로그인 중...
          </>
        ) : (
          "로그인"
        )}
      </Button>
    </form>
  );
}

function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
      agree: false as unknown as true,
    },
  });

  const onSubmit = async (data: SignupInput) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("가입이 완료되었습니다 (데모)", { description: data.email });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid max-w-sm gap-4"
      noValidate
    >
      <Field id="signup-name" label="이름" error={errors.name?.message}>
        <Input
          id="signup-name"
          placeholder="홍길동"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
      </Field>
      <Field id="signup-email" label="이메일" error={errors.email?.message}>
        <Input
          id="signup-email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </Field>
      <Field
        id="signup-password"
        label="비밀번호"
        error={errors.password?.message}
      >
        <Input
          id="signup-password"
          type="password"
          aria-invalid={!!errors.password}
          {...register("password")}
        />
      </Field>
      <Field
        id="signup-confirm"
        label="비밀번호 확인"
        error={errors.confirm?.message}
      >
        <Input
          id="signup-confirm"
          type="password"
          aria-invalid={!!errors.confirm}
          {...register("confirm")}
        />
      </Field>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Checkbox id="signup-agree" {...register("agree")} />
          <Label htmlFor="signup-agree" className="text-sm font-normal">
            서비스 이용 약관에 동의합니다
          </Label>
        </div>
        {errors.agree?.message ? (
          <p className="text-destructive text-xs leading-5" role="alert">
            {errors.agree.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" /> 가입 중...
          </>
        ) : (
          "가입하기"
        )}
      </Button>
    </form>
  );
}

function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: NewsletterInput) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("구독 완료!", { description: data.email });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md space-y-2"
      noValidate
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-label="이메일"
          {...register("email")}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="animate-spin" /> : "구독"}
        </Button>
      </div>
      {errors.email?.message ? (
        <p className="text-destructive text-xs leading-5" role="alert">
          {errors.email.message}
        </p>
      ) : null}
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p className={cn("text-destructive text-xs leading-5")} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
