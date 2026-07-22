"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/features/contact-form/actions";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/features/contact-form/schema";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    const response = await submitContactForm(values);
    setResult(response);
    if (response.success) reset();
  }

  return (
    <AnimatePresence mode="wait">
      {result?.success ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="border-border bg-card flex flex-col items-center gap-4 rounded-2xl border px-6 py-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              delay: 0.1,
            }}
            className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500"
          >
            <CheckCircle2 className="size-7" />
          </motion.div>
          <div>
            <p className="font-semibold">Message sent</p>
            <p className="text-muted-foreground mt-1 text-sm">
              {result.message}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={() => setResult(null)}>
            Send another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              autoComplete="name"
              {...register("name")}
              className={cn(
                "bg-background focus:border-accent-blue mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm transition-colors outline-none",
                errors.name ? "border-destructive" : "border-border",
              )}
            />
            {errors.name && (
              <p className="text-destructive mt-1.5 text-xs">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className={cn(
                "bg-background focus:border-accent-blue mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm transition-colors outline-none",
                errors.email ? "border-destructive" : "border-border",
              )}
            />
            {errors.email && (
              <p className="text-destructive mt-1.5 text-xs">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              className={cn(
                "bg-background focus:border-accent-blue mt-1.5 w-full resize-none rounded-lg border px-3.5 py-2.5 text-sm transition-colors outline-none",
                errors.message ? "border-destructive" : "border-border",
              )}
            />
            {errors.message && (
              <p className="text-destructive mt-1.5 text-xs">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
            {isSubmitting ? "Sending…" : "Send message"}
          </Button>

          {result && !result.success && (
            <p className="text-destructive flex items-center gap-2 text-sm">
              <XCircle className="size-4 shrink-0" />
              {result.message}
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
