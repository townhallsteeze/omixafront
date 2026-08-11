import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return <main className="mesh-bg grid min-h-screen place-items-center px-4 pt-24 text-center"><div><p className="font-bold text-electric">404</p><h1 className="mt-3 font-display text-5xl font-bold">Page not found</h1><p className="mt-4 text-muted">The page you requested is not available.</p><div className="mt-8"><Button href="/">Return home</Button></div></div></main>;
}
