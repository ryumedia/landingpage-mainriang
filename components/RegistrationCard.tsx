"use client";

import { ArrowRight, FlaskConical, Palette, Sparkles, UserPlus } from "lucide-react";

const icons: Record<string, React.ComponentType<React.ComponentProps<typeof Sparkles>>> = {
  UserPlus,
  FlaskConical,
  Palette
};

type Registration = {
  title: string;
  description: string;
  icon: string;
  url: string;
};

export default function RegistrationCard({ item }: { item: Registration }) {
  const Icon = icons[item.icon] ?? Sparkles;
  const placeholder = item.url.includes("[");

  return (
    <a
      href={placeholder ? "#" : item.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Daftar ${item.title}`}
      onClick={(e) => {
        if (placeholder) e.preventDefault();
      }}
      className={`group flex-col rounded-[2rem] border-[#e7e5dc] bg-[#fffaf1] p-7 transition ${placeholder ? "cursor-not-allowed opacity-70" : "hover:-translate-y-2 hover:shadow-xl"
        }`}
    >
      <span className="flex size-12 items-center justify-center rounded-2xl bg-[#f1e6fa] text-[#702fa0]">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-6 text-2xl font-black text-[#28433b]">{item.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-[#65746f]">{item.description}</p>
      <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#702fa0] px-5 py-3 font-bold text-white transition group-hover:gap-3 group-hover:bg-[#53217a]">
        Daftar Sekarang <ArrowRight className="size-4" />
      </span>
    </a>
  );
}
