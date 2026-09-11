import Link from "next/link";
import { MessageCircle } from "lucide-react";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const links = [
    ["About", "about"],
    ["Visi & Misi", "visi-misi"],
    ["Trilogi", "trilogi"],
    ["School Program", "school-program"],
    ["Cabang", "cabang"],
    ["Contact", "contact"]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e5dc]/80 bg-[#fffaf1]/90 backdrop-blur-xl">
      <div className="container-page relative flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Main Riang Preschool">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-[#702fa0] text-xl text-white shadow-sm">
            ✿
          </span>
          <span>
            <span className="block text-sm font-black tracking-[.08em] text-[#28433b]">MAIN RIANG</span>
            <span className="block text-[10px] font-bold tracking-[.18em] text-[#7a8984]">PRESCHOOL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigasi utama">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm font-semibold text-[#52645e] transition hover:text-[#702fa0]">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#702fa0] px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#53217a] sm:inline-flex"
          >
            <MessageCircle className="size-4" />
            Hubungi Kami
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}