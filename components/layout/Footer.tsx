"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Send, Twitter } from "lucide-react";
import { useState } from "react";
import { navLinks, services } from "@/data/site";
import { getApiUrl } from "@/lib/api";

export function Footer() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submitNewsletter(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setMessage("Enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const body = new FormData(form);
      body.set("formName", "Newsletter signup form");
      const response = await fetch(getApiUrl("/api/forms"), { method: "POST", body });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Submission failed");
      }
      setMessage("Subscribed.");
      form.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr_1.2fr] md:px-6">
        <div>
          <Image src="/images/omixa-labs-logo.png" width={240} height={120} alt="Omixa Labs logo" className="h-24 w-auto object-contain" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">Omixa Labs builds intelligent systems, automated workflows, and AI-powered software for businesses ready to move forward.</p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Twitter, Github].map((Icon, i) => <a key={i} className="focus-ring rounded-md bg-white/10 p-2 hover:bg-white/20" href="#" aria-label="Social link"><Icon size={18} /></a>)}
          </div>
        </div>
        <div><h2 className="font-bold">Navigation</h2><div className="mt-4 grid gap-2">{navLinks.map((l) => <Link className="text-sm text-white/70 hover:text-white" href={l.href} key={l.href}>{l.label}</Link>)}</div></div>
        <div><h2 className="font-bold">Services</h2><div className="mt-4 grid gap-2">{services.slice(0, 6).map((s) => <Link className="text-sm text-white/70 hover:text-white" href="/services" key={s.title}>{s.title}</Link>)}</div></div>
        <div>
          <h2 className="font-bold">Newsletter</h2>
          <form onSubmit={submitNewsletter} className="mt-4 flex gap-2" noValidate><input required name="email" aria-label="Email" type="email" placeholder="you@company.com" className="focus-ring min-w-0 flex-1 rounded-md border border-white/10 bg-white/10 px-3 py-3 text-sm text-white placeholder:text-white/50" /><button disabled={submitting} className="focus-ring rounded-md bg-electric p-3 transition hover:bg-electricHover disabled:cursor-not-allowed disabled:opacity-70" aria-label="Subscribe"><Send size={18} /></button></form>
          {message ? <p role="status" className="mt-3 text-sm text-white/70">{message}</p> : null}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-of-use">Terms of Use</Link><Link href="/cookie-policy">Cookie Policy</Link></div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/60">© 2026 Omixa Labs. All rights reserved.</div>
    </footer>
  );
}
