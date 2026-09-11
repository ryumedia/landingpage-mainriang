import {
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  Heart,
  Leaf,
  Lightbulb,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import BranchTabs from "@/components/BranchTabs";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { gallery, schoolPrograms, trilogi } from "@/lib/data";

const reasons = [
  {
    icon: Sparkles,
    title: "Islamic Montessori",
    text: "Belajar dengan pendekatan Montessori yang dipadukan dengan nilai-nilai Islam."
  },
  {
    icon: Heart,
    title: "Child-Centered Learning",
    text: "Anak mendapatkan ruang untuk belajar sesuai tahap perkembangan dan kebutuhannya."
  },
  {
    icon: Star,
    title: "Character Building",
    text: "Membangun kebiasaan baik, adab, kemandirian, dan tanggung jawab."
  },
  {
    icon: SmileIcon,
    title: "Happy Learning",
    text: "Menciptakan pengalaman belajar yang menyenangkan dan bermakna."
  },
  {
    icon: Heart,
    title: "Safe & Caring Environment",
    text: "Lingkungan yang hangat dan mendukung anak."
  },
  {
    icon: Users,
    title: "Experienced School",
    text: "Informasi pengalaman dan pencapaian sekolah dapat ditambahkan berdasarkan data resmi."
  }
];

function SmileIcon(props: React.ComponentProps<typeof Sparkles>) {
  return <Sparkles {...props} />;
}

const principles = [
  ["Independence", "Anak belajar melakukan sesuatu secara mandiri."],
  ["Practical Life", "Anak belajar keterampilan kehidupan sehari-hari."],
  ["Prepared Environment", "Lingkungan disiapkan agar anak dapat belajar secara aktif."],
  ["Islamic Character", "Pembelajaran diarahkan untuk membangun adab, akhlak, dan nilai-nilai Islam."],
  ["Love of Learning", "Anak dibangun menjadi pembelajar yang menikmati proses belajar."]
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <main>
        <section className="soft-grid relative overflow-hidden">
          <div className="container-page grid min-h-[calc(100svh-72px)] items-center gap-10 py-14 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#e2d3f2] bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-[#702fa0]">
                <Sparkles className="size-4" />
                Playgroup & TK • Islamic Montessori
              </span>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[.98] tracking-[-.045em] text-[#28433b] sm:text-6xl lg:text-7xl">
                Tempat Anak Tumbuh, Belajar, dan Bermain dengan{" "}
                <span className="text-[#702fa0]">Bahagia.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#65746f] sm:text-lg">
                Main Riang Preschool menghadirkan pengalaman belajar anak usia dini melalui pendekatan Islamic Montessori yang menumbuhkan kemandirian, karakter, kreativitas, dan kecintaan kepada Allah.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#702fa0] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#53217a]">
                  Kenali Main Riang <ArrowRight className="size-4" />
                </a>
                <a href="#cabang" className="inline-flex items-center justify-center rounded-full border border-[#e2d3f2] bg-white px-6 py-3.5 font-bold text-[#702fa0] transition hover:-translate-y-0.5 hover:bg-[#faf5ff]">
                  Hubungi Kami via WhatsApp
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#65746f]">
                <span className="inline-flex items-center gap-2"><Check className="size-4 text-[#702fa0]" /> Child-centered</span>
                <span className="inline-flex items-center gap-2"><Check className="size-4 text-[#702fa0]" /> Joyful learning</span>
                <span className="inline-flex items-center gap-2"><Check className="size-4 text-[#702fa0]" /> Islamic values</span>
              </div>
            </div>

            <div className="reveal lg:pl-8">
              <div className="placeholder-image relative min-h-[440px] rounded-[2.5rem] border border-white/70 p-6 shadow-[0_30px_80px_rgba(60,34,90,.12)] sm:min-h-[540px]">
                <div className="absolute left-6 top-6 rounded-2xl bg-white/85 p-4 shadow-lg backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[.16em] text-[#7a8984]">Main Riang</p>
                  <p className="mt-1 font-black text-[#28433b]">Ruang tumbuh yang hangat</p>
                </div>
                <div className="absolute bottom-7 left-7 right-7 rounded-[1.5rem] bg-white/85 p-5 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-[#f1e6fa] text-2xl">🧩</span>
                    <div>
                      <p className="font-black text-[#28433b]">PLACEHOLDER FOTO HERO</p>
                      <p className="text-sm text-[#65746f]">Ganti dengan foto aktivitas asli Main Riang.</p>
                    </div>
                  </div>
                </div>
                <div className="absolute right-7 top-1/2 flex size-20 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff9302] text-4xl shadow-xl">🌱</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-20 sm:py-28">
          <div className="container-page grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[.16em] text-[#702fa0]">About Main Riang</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#28433b] sm:text-5xl">Tentang Main Riang</h2>
              <p className="mt-6 leading-8 text-[#65746f]">
                Main Riang Preschool adalah ruang belajar anak usia dini yang berfokus pada perkembangan anak secara menyeluruh. Di sini, proses belajar dirancang agar anak dapat bereksplorasi, bermain, membangun kemandirian, dan tumbuh dalam lingkungan yang hangat.
              </p>
              <p className="mt-4 leading-8 text-[#65746f]">
                Perpaduan nilai-nilai Islam dan pendekatan Montessori menjadi bagian penting dari pengalaman belajar yang ingin dihadirkan Main Riang.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Islamic Character", "🌙"],
                ["Montessori Learning", "🧩"],
                ["Happy Learning", "🌈"],
                ["Growing Independence", "🌱"]
              ].map(([title, icon]) => (
                <div key={title} className="rounded-3xl border border-[#e7e5dc] bg-[#fffaf1] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">{icon}</span>
                  <h3 className="mt-5 font-black text-[#28433b]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#65746f]">Pengalaman belajar yang mendukung pertumbuhan anak secara utuh.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="visi-misi" className="islamic-pattern py-20 sm:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[.16em] text-[#702fa0]">Identity</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#28433b] sm:text-5xl">Visi & Misi Main Riang</h2>
              <p className="mt-4 text-[#65746f]">Silakan ganti placeholder berikut dengan rumusan resmi Main Riang.</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
              <div className="rounded-[2rem] bg-[#702fa0] p-8 text-white shadow-xl">
                <p className="text-sm font-black uppercase tracking-[.16em] text-[#f1e6fa]">Visi</p>
                <h3 className="mt-4 text-3xl font-black">[ISI VISI RESMI MAIN RIANG]</h3>
              </div>
              <div className="rounded-[2rem] border border-[#e7e5dc] bg-white p-8">
                <p className="text-sm font-black uppercase tracking-[.16em] text-[#702fa0]">Misi</p>
                <div className="mt-6 space-y-4">
                  {["[MISI RESMI 1]", "[MISI RESMI 2]", "[MISI RESMI 3]", "[MISI RESMI 4]"].map((m, i) => (
                    <div key={m} className="flex gap-4 rounded-2xl bg-[#fffaf1] p-4">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f1e6fa] text-sm font-black text-[#702fa0]">{i + 1}</span>
                      <p className="font-semibold text-[#52645e]">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="trilogi" className="bg-white py-20 sm:py-28">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[.16em] text-[#702fa0]">Our Philosophy</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-[#28433b] sm:text-5xl">Trilogi Main Riang</h2>
              </div>
              <p className="max-w-xl text-[#65746f]">Tiga elemen berikut sengaja menggunakan placeholder agar filosofi resmi Main Riang tidak terkarang.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {trilogi.map((item) => (
                <article key={item.number} className="group rounded-[2rem] border border-[#e7e5dc] bg-[#fffaf1] p-7 transition hover:-translate-y-2 hover:shadow-xl">
                  <span className="text-5xl font-black text-[#d9cbea]">{item.number}</span>
                  <h3 className="mt-8 text-2xl font-black text-[#28433b]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#65746f]">{item.description}</p>
                  <div className="mt-8 h-1 w-12 rounded-full bg-[#ff9302] transition-all group-hover:w-20" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="islamic-montessori" className="bg-[#f3f8f5] py-20 sm:py-28">
          <div className="container-page grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[.16em] text-[#702fa0]">Core Approach</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#28433b] sm:text-5xl">Islamic Montessori</h2>
              <p className="mt-6 leading-8 text-[#65746f]">
                Pendekatan Montessori membantu anak belajar melalui lingkungan yang dipersiapkan, aktivitas nyata, eksplorasi, dan kesempatan untuk membangun kemandirian. Di Main Riang, nilai-nilai Islam menjadi bagian dari pembentukan karakter dan kebiasaan baik.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#702fa0] shadow-sm">
                <Leaf className="size-4" /> Independence + Character + Joy
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map(([title, text], i) => (
                <div key={title} className={`rounded-3xl border border-[#dce8e2] bg-white p-6 ${i === 4 ? "sm:col-span-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#f1e6fa] text-[#702fa0]">
                      {i % 2 === 0 ? <BookOpen className="size-5" /> : <Brain className="size-5" />}
                    </span>
                    <h3 className="font-black text-[#28433b]">{title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#65746f]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="school-program" className="bg-white py-20 sm:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[.16em] text-[#702fa0]">Learning Journey</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#28433b] sm:text-5xl">School Program</h2>
              <p className="mt-4 text-[#65746f]">Program dasar mengikuti struktur pada brief dan dapat disesuaikan dengan dokumen resmi sekolah.</p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {schoolPrograms.map((program, i) => (
                <article key={program.title} className="rounded-[2rem] border border-[#e7e5dc] bg-[#fffaf1] p-7">
                  <span className="rounded-full bg-[#ff9302] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#28433b]">0{i + 1}</span>
                  <h3 className="mt-6 text-2xl font-black text-[#28433b]">{program.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#65746f]">{program.description}</p>
                  <ul className="mt-6 space-y-3">
                    {program.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-semibold text-[#52645e]">
                        <Check className="mt-0.5 size-4 shrink-0 text-[#702fa0]" /> {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-[2rem] bg-[#702fa0] p-8 text-white">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[.16em] text-[#f1e6fa]">Program Unggulan Main Riang</p>
                  <h3 className="mt-2 text-2xl font-black">[ISI PROGRAM UNGGULAN RESMI]</h3>
                </div>
                <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-[#702fa0]">
                  Tanya Program <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf1] py-20 sm:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[.16em] text-[#702fa0]">Why Main Riang?</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#28433b] sm:text-5xl">Mengapa Main Riang?</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="rounded-3xl border border-[#e7e5dc] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                    <Icon className="size-7 text-[#702fa0]" />
                    <h3 className="mt-5 font-black text-[#28433b]">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#65746f]">{reason.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-white py-20 sm:py-28">
          <div className="container-page">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[.16em] text-[#702fa0]">School Experience</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-[#28433b] sm:text-5xl">Momen Belajar di Main Riang</h2>
              </div>
              <p className="max-w-md text-[#65746f]">Ganti setiap placeholder dengan foto asli sekolah pada folder <code className="rounded bg-[#f5f2e9] px-1">public/images</code>.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, i) => (
                <div key={item} className={`placeholder-image flex min-h-64 items-end rounded-[1.75rem] p-5 ${i === 0 ? "sm:row-span-2 sm:min-h-full" : ""}`}>
                  <div className="relative z-10 w-full rounded-2xl bg-white/85 p-4 backdrop-blur">
                    <p className="font-black text-[#28433b]">{item}</p>
                    <p className="mt-1 text-xs text-[#65746f]">PLACEHOLDER FOTO</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cabang" className="bg-[#f3f8f5] py-20 sm:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[.16em] text-[#702fa0]">Our Branches</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#28433b] sm:text-5xl">Temukan Main Riang Terdekat</h2>
              <p className="mt-4 text-[#65746f]">Pilih cabang untuk melihat informasi dan menghubungi sekolah melalui WhatsApp.</p>
            </div>
            <div className="mt-10">
              <BranchTabs />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 sm:py-28">
          <div className="container-page">
            <div className="overflow-hidden rounded-[2.5rem] bg-[#702fa0] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-[#f1e6fa]">Let&apos;s Connect</span>
                  <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Yuk, Kenali Dunia Belajar Main Riang</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#e1eee9]">
                    Temukan lingkungan belajar yang membantu anak tumbuh mandiri, percaya diri, berkarakter, dan bahagia.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a href="#cabang" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#702fa0]">
                    Pilih Cabang <ArrowRight className="size-4" />
                  </a>
                  <a href="#cabang" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 font-bold text-white hover:bg-white/10">
                    Konsultasi via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e7e5dc] bg-white py-12">
        <div className="container-page grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-[#702fa0] text-xl text-white">✿</span>
              <div>
                <p className="font-black tracking-[.08em] text-[#28433b]">MAIN RIANG PRESCHOOL</p>
                <p className="text-xs font-bold tracking-[.16em] text-[#7a8984]">PLAYGROUP & TK • ISLAMIC MONTESSORI</p>
              </div>
            </div>
            <p className="mt-5 max-w-lg leading-7 text-[#65746f]">
              Tempat anak tumbuh, belajar, dan bermain dengan bahagia.
            </p>
          </div>
          <div>
            <h3 className="font-black text-[#28433b]">Quick Links</h3>
            <div className="mt-4 grid gap-2 text-sm text-[#65746f]">
              <a href="#about" className="hover:text-[#702fa0]">About</a>
              <a href="#visi-misi" className="hover:text-[#702fa0]">Visi & Misi</a>
              <a href="#trilogi" className="hover:text-[#702fa0]">Trilogi</a>
              <a href="#school-program" className="hover:text-[#702fa0]">School Program</a>
              <a href="#cabang" className="hover:text-[#702fa0]">Cabang</a>
            </div>
          </div>
          <div>
            <h3 className="font-black text-[#28433b]">Cabang</h3>
            <div className="mt-4 grid gap-2 text-sm text-[#65746f]">
              <span>Gunung Batu</span>
              <span>Arcamanik</span>
              <span>Cileunyi</span>
            </div>
          </div>
        </div>
        <div className="container-page mt-10 border-t border-[#e7e5dc] pt-6 text-sm text-[#7a8984]">
          © {year} Main Riang Preschool. All Rights Reserved.
        </div>
      </footer>

      <WhatsAppFloat />
    </>
  );
}