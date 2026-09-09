"use server";

import {
  contactFieldErrors,
  contactSchema,
  readContactValues,
  type ContactPayload,
  type ContactState,
  type ContactValues,
} from "@/lib/contact";
import { getContactEmail, readEnv, siteName } from "@/lib/site";

async function deliver(payload: ContactPayload) {
  const resendKey = readEnv(process.env.RESEND_API_KEY);
  const to = getContactEmail();
  const from =
    readEnv(process.env.CONTACT_FROM_EMAIL) ??
    `${siteName} <onboarding@resend.dev>`;

  if (!resendKey || !to) {
    return null;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${resendKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: payload.email,
      subject: `Portfolio message from ${payload.name}`,
      text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
    }),
  });

  return response.ok;
}

function deliveryError(
  formError: NonNullable<ContactState["formError"]>,
  values: ContactValues,
): ContactState {
  return { status: "error", fieldErrors: {}, formError, values };
}

export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (formData.get("company")) {
    return { status: "success", fieldErrors: {} };
  }

  const values = readContactValues(formData);
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: contactFieldErrors(parsed.error),
      values,
    };
  }

  try {
    const delivered = await deliver(parsed.data);

    if (delivered === null) {
      return deliveryError("unconfigured", values);
    }
    if (!delivered) {
      return deliveryError("failed", values);
    }
  } catch {
    return deliveryError("failed", values);
  }

  return { status: "success", fieldErrors: {} };
}
