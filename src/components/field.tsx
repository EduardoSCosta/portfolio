import type { ChangeEvent } from "react";

import { AlertIcon } from "@/components/icons/alert";

import styles from "./field.module.css";

export type FieldChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type FieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  invalid: boolean;
  error: string;
  onChange: (event: FieldChange) => void;
  type?: "text" | "email";
  autoComplete?: string;
  multiline?: boolean;
};

export function Field({
  id,
  name,
  label,
  placeholder,
  value,
  invalid,
  error,
  onChange,
  type = "text",
  autoComplete,
  multiline = false,
}: FieldProps) {
  const errorId = `${id}-error`;
  const describedBy = invalid ? errorId : undefined;
  const className = `${multiline ? styles.textarea : styles.input} ${
    invalid ? styles.invalid : ""
  }`;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
        />
      )}
      {invalid ? (
        <p id={errorId} className={styles.fieldError}>
          <AlertIcon width={13} height={13} />
          {error}
        </p>
      ) : null}
    </div>
  );
}
