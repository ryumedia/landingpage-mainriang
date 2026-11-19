"use client";

import { MessageCircle } from "lucide-react";
import { branches, whatsappUrl } from "@/lib/data";

export default function WhatsAppFloat() {
  const branch = branches.find((b) => b.id === "cileunyi") ?? branches[0];
  const href = whatsappUrl(branch);

  return (
    <a
      href={href}
      onClick={(e) => { if (href === "#") e.preventDefault(); }}
      aria-label="Hubungi Main Riang via WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full px-4 py-3 font-bold text-white shadow-2xl transition sm:bottom-7 sm:right-7 ${
        href === "#" ? "bg-slate-400 cursor-not-allowed" : "bg-[#702fa0] hover:bg-[#53217a] hover:-translate-y-1"
      }`}
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}