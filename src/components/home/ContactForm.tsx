"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";

import { cn } from "~/utils/tailwind";
import { Button } from "~/components/ui/Button";
import { Form, FormField, FormItem, FormMessage } from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";
import { Textarea } from "~/components/ui/Textarea";
import GradientBorder from "~/components/effects/GradientBorder";

const formSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(1, "Please enter a message."),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      form.reset();
      toast.success("Message sent successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:mt-2 md:ml-auto md:w-full md:max-w-112"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-5 md:mb-6">
              <Input
                type="text"
                placeholder="Name"
                size="lg"
                className="h-12"
                {...field}
              />
              {form.formState.errors.name && (
                <FormMessage>{form.formState.errors.name.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-5 md:mb-6">
              <Input
                type="email"
                placeholder="Email"
                size="lg"
                className="h-12"
                {...field}
              />
              {form.formState.errors.email && (
                <FormMessage>{form.formState.errors.email.message}</FormMessage>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-12 md:mb-16">
              <Textarea
                placeholder="Message"
                size="lg"
                className="h-48"
                {...field}
              />
              {form.formState.errors.message && (
                <FormMessage>
                  {form.formState.errors.message.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
        <GradientBorder className="w-full rounded-[11px] md:inline-flex md:w-auto">
          <Button
            type="submit"
            size="lg"
            variant="outline"
            className={cn(
              "font-display w-full bg-linear-(--gradient-button) font-semibold",
              "md:text-4.5 px-5 md:h-12.5 md:w-auto",
            )}
          >
            <span className={cn(isSubmitting && "opacity-0")}>Submit</span>
            {isSubmitting && (
              <Loader2Icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
            )}
          </Button>
        </GradientBorder>
      </form>
    </Form>
  );
}
