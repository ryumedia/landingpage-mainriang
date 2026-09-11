"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About Main Riang", "about"],
  ["Visi & Misi", "visi-misi"],
  ["Trilogi Main Riang", "trilogi"],
  ["School Program", "school-program"],
  ["Cabang", "cabang"],
  ["Contact", "contact"]
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="rounded-xl p-2 text-[#28433b] hover:bg-[#f3f1e9]"
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-[72px] rounded-2xl border border-[#e7e5dc] bg-white p-3 shadow-2xl">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-semibold text-[#52645e] hover:bg-[#f5f2e9]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-[#702fa0] px-4 py-3 text-center font-bold text-white"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </div>
  );
}