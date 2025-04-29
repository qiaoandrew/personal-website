"use client";

import { useEffect } from "react";

export default function PethsappPage() {
  useEffect(() => {
    window.open("https://www.tsac.ca/pethsapp", "_blank");
  }, []);
  return null;
}
