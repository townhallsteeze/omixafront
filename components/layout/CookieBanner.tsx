"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(localStorage.getItem("omixa-labs-cookies") !== "accepted"), []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-lg border border-ink/10 bg-white p-4 shadow-card md:flex md:items-center md:justify-between md:gap-4">
      <p className="text-sm text-muted">Omixa Labs uses cookies to improve site performance, analytics, and form reliability.</p>
      <div className="mt-3 md:mt-0"><Button type="button" onClickCapture={() => { localStorage.setItem("omixa-labs-cookies", "accepted"); setShow(false); }}>Accept</Button></div>
    </div>
  );
}
