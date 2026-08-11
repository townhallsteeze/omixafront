import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/PageBlocks";
export const metadata: Metadata = { title: "Projects", description: "Sample Omixa Labs case studies and project portfolio.", openGraph: { title: "Omixa Labs Projects" } };
export default function Page() {
  return <ProjectsPage />;
}
