import { z } from "zod";

import { resend } from "~/lib/resend";

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const result = contactFormSchema.safeParse(await request.json());
    if (!result.success) {
      return Response.json({ error: result.error.flatten() }, { status: 400 });
    }

    const { name, email, message } = result.data;

    const { data, error } = await resend.emails.send({
      from: "hello@andrewqiao.com",
      to: ["andrewqiao2004@gmail.com"],
      subject: "New Contact Form Submission",
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
