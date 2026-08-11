import Image from "next/image";

export default function Loading() {
  return <main className="grid min-h-screen place-items-center bg-navy"><Image src="/images/omixa-labs-logo.png" width={260} height={260} alt="Omixa Labs loading" className="h-64 w-64 animate-pulse object-contain" /></main>;
}
