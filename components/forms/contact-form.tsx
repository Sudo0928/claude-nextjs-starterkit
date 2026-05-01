"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    // 데모: 실제 API 연결은 추후 추가하세요.
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success("문의가 정상적으로 접수되었습니다.", {
      description: `${data.name}님, 빠르게 답변드리겠습니다.`,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <Field
        id="name"
        label="이름"
        error={errors.name?.message}
        input={
          <Input
            id="name"
            placeholder="홍길동"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        }
      />
      <Field
        id="email"
        label="이메일"
        error={errors.email?.message}
        input={
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        }
      />
      <Field
        id="message"
        label="문의 내용"
        error={errors.message?.message}
        input={
          <Textarea
            id="message"
            rows={6}
            placeholder="어떤 도움이 필요하신가요?"
            aria-invalid={!!errors.message}
            {...register("message")}
          />
        }
      />
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" /> 전송 중...
          </>
        ) : (
          <>
            <Send /> 문의 보내기
          </>
        )}
      </Button>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  input: React.ReactNode;
  error?: string;
};

function Field({ id, label, input, error }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {input}
      {error ? (
        <p
          id={`${id}-error`}
          className={cn("text-destructive text-xs leading-5")}
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
