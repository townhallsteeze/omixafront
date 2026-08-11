"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { getApiUrl } from "@/lib/api";

type Field = { name: string; label: string; type?: string; required?: boolean; options?: string[] };

export function SmartForm({ fields, fileUpload = false, submitLabel, formName }: { fields: Field[]; fileUpload?: boolean; submitLabel: string; formName: string }) {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const file = (form.querySelector('input[type="file"]') as HTMLInputElement | null)?.files?.[0];
    if (file && (file.type !== "application/pdf" || file.size > 10 * 1024 * 1024)) {
      setMessage("Please upload a PDF CV no larger than 10 MB.");
      return;
    }
    if (!form.checkValidity()) {
      setMessage("Please complete every required field with valid information.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const body = new FormData(form);
      body.set("formName", formName);
      const response = await fetch(getApiUrl("/api/forms"), { method: "POST", body });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Submission failed");
      }
      setMessage("Thank you. Your job application has been submitted successfully.");
      form.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong while sending your submission. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-ink/10 bg-white p-6 shadow-card" noValidate>
      {fields.map((field) => (
        <label key={field.name} className="grid gap-2 text-sm font-semibold text-ink">
          {field.label}
          {field.options ? (
            <select required={field.required} name={field.name} className="focus-ring rounded-md border border-ink/15 px-4 py-3 font-normal text-muted">
              <option value="">Select an option</option>
              {field.options.map((option) => <option key={option}>{option}</option>)}
            </select>
          ) : field.type === "textarea" ? (
            <textarea required={field.required} name={field.name} rows={5} className="focus-ring rounded-md border border-ink/15 px-4 py-3 font-normal text-muted" />
          ) : (
            <input required={field.required} name={field.name} type={field.type || "text"} className="focus-ring rounded-md border border-ink/15 px-4 py-3 font-normal text-muted" />
          )}
        </label>
      ))}
      {fileUpload ? <input required name="cv" type="file" accept="application/pdf" className="focus-ring rounded-md border border-ink/15 p-3 text-sm" /> : null}
      <label className="flex gap-3 text-sm text-muted"><input required name="consent" value="Yes" type="checkbox" className="mt-1" /> I consent to Omixa Labs contacting me about this submission.</label>
      {message ? <p role="status" className="rounded-md bg-mist p-3 text-sm text-ink">{message}</p> : null}
      <Button type="submit" disabled={submitting}>{submitting ? "Sending..." : submitLabel}</Button>
    </form>
  );
}
