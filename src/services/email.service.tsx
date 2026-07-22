import { Resend } from "resend";
import { render } from "react-email";

import { siteConfig } from "@/config/site.config";
import { ContactEmail } from "@/features/contact-form/contact-email";

interface SendContactEmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  message,
}: SendContactEmailParams) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const html = await render(
    <ContactEmail name={name} email={email} message={message} />,
  );

  const { error } = await resend.emails.send({
    from: `${siteConfig.name} <onboarding@resend.dev>`,
    to: process.env.RESEND_TO_EMAIL || siteConfig.author.email,
    replyTo: email,
    subject: `New message from ${name}`,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}
