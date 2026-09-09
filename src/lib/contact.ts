import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().pipe(z.email()),
  message: z.string().trim().min(10).max(2000),
});

export type ContactPayload = z.infer<typeof contactSchema>;
export type ContactFieldError = keyof ContactPayload;
export type ContactValues = Record<ContactFieldError, string>;

export type ContactState = {
  status: "idle" | "success" | "error";
  fieldErrors: Partial<Record<ContactFieldError, true>>;
  values?: ContactValues;
  formError?: "unconfigured" | "failed";
};

export const initialContactState: ContactState = {
  status: "idle",
  fieldErrors: {},
};

export function readContactValues(formData: FormData): ContactValues {
  return {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
}

export function contactFieldErrors(
  error: z.ZodError<ContactPayload>,
): Partial<Record<ContactFieldError, true>> {
  const { fieldErrors: issues } = z.flattenError(error);
  const fieldErrors: Partial<Record<ContactFieldError, true>> = {};

  for (const [field, messages] of Object.entries(issues)) {
    if (messages?.length) {
      fieldErrors[field as ContactFieldError] = true;
    }
  }

  return fieldErrors;
}
