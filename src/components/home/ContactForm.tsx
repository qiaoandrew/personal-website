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
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="xs:mb-6 mb-5">
              <Input type="text" placeholder="Name" {...field} />
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
            <FormItem className="xs:mb-6 mb-5">
              <Input type="email" placeholder="Email" {...field} />
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
            <FormItem className="xs:mb-16 mb-12">
              <Textarea
                placeholder="Message"
                {...field}
                className="xs:h-50 h-40"
              />
              {form.formState.errors.message && (
                <FormMessage>
                  {form.formState.errors.message.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
