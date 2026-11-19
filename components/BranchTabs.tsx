"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ExternalLink, FileText, MapPin, MessageCircle } from "lucide-react";
import { branches, whatsappUrl } from "@/lib/data";

export default function BranchTabs() {
  const [active, setActive] = useState(branches[0].id);
  const branch = branches.find((item) => item.id === active) ?? branches[0];
  const wa = whatsappUrl(branch);

  return (
    <div className="rounded-[2rem] border border-[#e7e5dc] bg-white p-3 shadow-[0_20px_60px_rgba(60,34,90,.08)]">
      {/* Mobile: dropdown supaya semua cabang terlihat tanpa perlu digeser */}
      <div className="md:hidden">
        <label
          htmlFor="branch-select"
          className="block rounded-2xl bg-[#702fa0] px-5 py-3 text-xs font-black uppercase tracking-[.14em] text-white"
        >
          Pilih Cabang Main Riang
        </label>
        <div className="relative mt-2">
          <select
            id="branch-select"
            value={active}
            onChange={(e) => setActive(e.target.value as typeof active)}
            className="w-full appearance-none rounded-2xl border-2 border-[#702fa0] bg-white px-5 py-4 pr-12 text-base font-bold text-[#28433b] outline-none transition focus:ring-2 focus:ring-[#702fa0]/40"
          >
            {branches.map((item) => (
              <option key={item.id} value={item.id}>
                {item.shortName}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[#702fa0]"
          />
        </div>
      </div>

      {/* Desktop: tab list seperti sebelumnya */}
      <div
        role="tablist"
        aria-label="Pilih cabang Main Riang"
        className="hidden gap-2 rounded-2xl bg-[#f5f2e9] p-2 md:flex"
      >
        {branches.map((item) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              id={`branch-tab-${item.id}`}
              role="tab"
              aria-selected={selected}
              aria-controls="branch-panel"
              onClick={() => setActive(item.id)}
              className={`min-w-max rounded-xl px-5 py-3 text-sm font-bold transition ${selected
                  ? "bg-[#702fa0] text-white shadow-md"
                  : "text-[#52645e] hover:bg-white"
                }`}
            >
              {item.shortName}
            </button>
          );
        })}
      </div>

      <div
        key={branch.id}
        id="branch-panel"
        role="tabpanel"
        aria-labelledby={`branch-tab-${branch.id}`}
        className="grid gap-8 p-5 sm:p-8 md:grid-cols-[1fr_.9fr] md:items-center"
      >
        <div>
          <h3 className="text-2xl font-black tracking-tight text-[#28433b] sm:text-3xl">
            {branch.name}
          </h3>
          <div className="mt-5 flex gap-3 text-[#65746f]">
            <MapPin className="mt-1 size-5 shrink-0 text-[#702fa0]" />
            <p>{branch.address}</p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={wa}
              aria-label={`Hubungi ${branch.name} via WhatsApp`}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition ${wa === "#"
                  ? "cursor-not-allowed bg-slate-200 text-slate-500"
                  : "bg-[#702fa0] text-white hover:bg-[#53217a] hover:-translate-y-0.5"
                }`}
              onClick={(e) => {
                if (wa === "#") e.preventDefault();
              }}
            >
              <MessageCircle className="size-5" />
              WhatsApp
            </a>

            <a
              href={branch.mapsUrl.includes("[") ? "#" : branch.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 font-bold ${branch.mapsUrl.includes("[")
                  ? "cursor-not-allowed border-slate-200 text-slate-400"
                  : "bg-[#057512] text-white hover:bg-[#004f09] hover:-translate-y-0.5"
                }`}
              onClick={(e) => {
                if (branch.mapsUrl.includes("[")) e.preventDefault();
              }}
            >
              <ExternalLink className="size-4" />
              Lihat Peta
            </a>

            <a
              href={branch.pricelistUrl.includes("[") ? "#" : branch.pricelistUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Lihat pricelist ${branch.name}`}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition ${branch.pricelistUrl.includes("[")
                  ? "cursor-not-allowed bg-slate-200 text-slate-500"
                  : "bg-[#ff9302] text-white hover:bg-[#d17702] hover:-translate-y-0.5"
                }`}
              onClick={(e) => {
                if (branch.pricelistUrl.includes("[")) e.preventDefault();
              }}
            >
              <FileText className="size-5" />
              Pricelist
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
          <Image
            src={branch.photo}
            alt={`Foto ${branch.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
