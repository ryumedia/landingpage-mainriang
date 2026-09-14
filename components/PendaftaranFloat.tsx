"use client";

import { CircleCheckBig } from "lucide-react";

export default function PendaftaranFloat() {
  return (
    <a
      href="#pendaftaran"
      aria-label="Menuju halaman Pendaftaran"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#702fa0] px-4 py-3 font-bold text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#53217a] sm:bottom-7 sm:right-7"
    >
      <CircleCheckBig className="size-5" />
      <span className="hidden sm:inline">Pendaftaran</span>
    </a>
  );
}
