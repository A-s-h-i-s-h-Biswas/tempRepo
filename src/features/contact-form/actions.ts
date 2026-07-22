"use server";

import {
  contactFormSchema,
  type ContactFormValues,
} from "@/features/contact-form/schema";
import { sendContactEmail } from "@/services/email.service";

export interface ContactFormResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactFormResult> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Please check the form for errors." };
  }

  try {
    await sendContactEmail(parsed.data);
    return {
      success: true,
      message: "Thanks for reaching out — I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Failed to send contact email", error);
    return {
      success: false,
      message:
        "Something went wrong sending that. Please try again or email me directly.",
    };
  }
}
