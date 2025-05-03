"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PethsappPage() {
  const router = useRouter();

  useEffect(() => {
    window.open("https://www.tsac.ca/pethsapp", "_blank");
    router.replace("/");
  }, [router]);

  return null;
}
