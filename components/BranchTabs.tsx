"use client";

import { useState } from "react";
import { ExternalLink, FileText, MapPin, MessageCircle } from "lucide-react";
import { branches, whatsappUrl } from "@/lib/data";

export default function BranchTabs() {
  const [active, setActive] = useState(branches[0].id);
  const branch = branches.find((item) => item.id === active) ?? branches[0];
  const wa = whatsappUrl(branch);

  return (
    <div className="rounded-[2rem] border border-[#e7e5dc] bg-white p-3 shadow-[0_20px_60px_rgba(60,34,90,.08)]">
      <div
        role="tablist"
        aria-label="Pilih cabang Main Riang"
        className="flex gap-2 overflow-x-auto rounded-2xl bg-[#f5f2e9] p-2"
      >
        {branches.map((item) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(item.id)}
              className={`min-w-max rounded-xl px-5 py-3 text-sm font-bold transition ${
                selected
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
        role="tabpanel"
        className="grid gap-8 p-5 sm:p-8 md:grid-cols-[1fr_.9fr] md:items-center"
      >
        <div>
          <span className="inline-flex rounded-full bg-[#f1e6fa] px-3 py-1 text-xs font-bold uppercase tracking-[.14em] text-[#702fa0]">
            Cabang Main Riang
          </span>
          <h3 className="mt-4 text-2xl font-black tracking-tight text-[#28433b] sm:text-3xl">
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
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition ${
                wa === "#"
                  ? "cursor-not-allowed bg-slate-200 text-slate-500"
                  : "bg-[#702fa0] text-white hover:bg-[#53217a] hover:-translate-y-0.5"
              }`}
              onClick={(e) => {
                if (wa === "#") e.preventDefault();
              }}
            >
              <MessageCircle className="size-5" />
              Hubungi via WhatsApp
            </a>

            <a
              href={branch.mapsUrl.includes("[") ? "#" : branch.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 font-bold ${
                branch.mapsUrl.includes("[")
                  ? "cursor-not-allowed border-slate-200 text-slate-400"
                  : "border-[#e2d3f2] text-[#702fa0] hover:bg-[#faf5ff]"
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
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition ${
                branch.pricelistUrl.includes("[")
                  ? "cursor-not-allowed bg-slate-200 text-slate-500"
                  : "bg-[#28433b] text-white hover:bg-[#1c332c] hover:-translate-y-0.5"
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

        <div className="placeholder-image flex min-h-56 items-center justify-center rounded-[1.5rem] p-8 text-center">
          <div className="relative z-10">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-white/75 text-3xl shadow-sm">
              🏡
            </div>
            <p className="mt-4 font-bold text-[#28433b]">Foto / peta cabang</p>
            <p className="mt-1 text-sm text-[#65746f]">
              Ganti placeholder ini dengan foto atau Google Maps cabang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}