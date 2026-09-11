export type Branch = {
  id: "gunungBatu" | "arcamanik" | "cileunyi";
  shortName: string;
  name: string;
  address: string;
  whatsapp: string;
  mapsUrl: string;
};

export const branches: Branch[] = [
  {
    id: "gunungBatu",
    shortName: "Gunung Batu",
    name: "Main Riang Preschool Gunung Batu",
    address: "[ALAMAT GUNUNG BATU]",
    whatsapp: "[NOMOR_WA_GUNUNG_BATU]",
    mapsUrl: "[LINK_GOOGLE_MAPS_GUNUNG_BATU]"
  },
  {
    id: "arcamanik",
    shortName: "Arcamanik",
    name: "Main Riang Preschool Arcamanik",
    address: "[ALAMAT ARCAMANIK]",
    whatsapp: "[NOMOR_WA_ARCAMANIK]",
    mapsUrl: "[LINK_GOOGLE_MAPS_ARCAMANIK]"
  },
  {
    id: "cileunyi",
    shortName: "Cileunyi",
    name: "Main Riang Preschool Cileunyi",
    address: "[ALAMAT CILEUNYI]",
    whatsapp: "[NOMOR_WA_CILEUNYI]",
    mapsUrl: "[LINK_GOOGLE_MAPS_CILEUNYI]"
  }
];

export const schoolPrograms = [
  {
    title: "Playgroup",
    description: "Program untuk anak usia dini dengan pengalaman belajar yang hangat dan bertahap.",
    items: ["Adaptasi sekolah", "Social interaction", "Practical life", "Motor skills", "Language development", "Sensorial activities", "Islamic habits"]
  },
  {
    title: "TK A",
    description: "Mendorong kemandirian, bahasa, eksplorasi, dan perkembangan sosial-emosional.",
    items: ["Kemandirian", "Bahasa", "Numerasi awal", "Sensorial", "Practical life", "Social emotional development", "Islamic character"]
  },
  {
    title: "TK B",
    description: "Mempersiapkan anak menghadapi tahap belajar berikutnya dengan percaya diri.",
    items: ["School readiness", "Academic readiness", "Independence", "Problem solving", "Communication", "Leadership", "Islamic character"]
  }
];

export const trilogi = [
  { number: "01", title: "[TRILOGI 1]", description: "[DESKRIPSI TRILOGI 1]" },
  { number: "02", title: "[TRILOGI 2]", description: "[DESKRIPSI TRILOGI 2]" },
  { number: "03", title: "[TRILOGI 3]", description: "[DESKRIPSI TRILOGI 3]" }
];

export const gallery = [
  "Montessori Activity",
  "Outdoor Activity",
  "Islamic Activity",
  "Art & Creativity",
  "Practical Life",
  "Classroom",
  "Playground",
  "Daycare"
];

export function whatsappUrl(branch: Branch) {
  const number = branch.whatsapp.replace(/\D/g, "");
  if (!number || branch.whatsapp.includes("[")) return "#";
  const message = encodeURIComponent(
    `Assalamu'alaikum, saya ingin mendapatkan informasi pendaftaran Main Riang Preschool Cabang ${branch.shortName}.`
  );
  return `https://wa.me/${number}?text=${message}`;
}