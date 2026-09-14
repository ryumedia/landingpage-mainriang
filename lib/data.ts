export type Branch = {
  id: "gunungBatu" | "arcamanik" | "cileunyi";
  shortName: string;
  name: string;
  address: string;
  whatsapp: string;
  mapsUrl: string;
  pricelistUrl: string;
  photo: string;
};

export const branches: Branch[] = [
  {
    id: "gunungBatu",
    shortName: "Gunung Batu",
    name: "Main Riang Preschool Gunung Batu",
    address: "Jl. Babakan Radio, Sukaraja, Kec. Cicendo, Kota Bandung, Jawa Barat 40175",
    whatsapp: "6285710905799",
    mapsUrl: "https://maps.app.goo.gl/aSnTgEyDJf1irViDA",
    pricelistUrl: "[LINK_PRICELIST_GUNUNG_BATU]",
    photo: "/images/cabang-gunung-batu.jpg"
  },
  {
    id: "arcamanik",
    shortName: "Arcamanik",
    name: "Main Riang Preschool Arcamanik",
    address: "Jl. Cicukang, Cisaranten Bina Harapan, Kec. Arcamanik, Kota Bandung, Jawa Barat 40294",
    whatsapp: "6285520925820",
    mapsUrl: "https://maps.app.goo.gl/nhQPtzMfDTwDCLFq6",
    pricelistUrl: "[LINK_PRICELIST_ARCAMANIK]",
    photo: "/images/cabang-arcamanik.jpg"
  },
  {
    id: "cileunyi",
    shortName: "Cileunyi",
    name: "Main Riang Preschool Cileunyi",
    address: "Komplek Bumi Sanggar Mebel 2 Blok A 11-12, Cileunyi Kulon, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat 40622",
    whatsapp: "628131274868",
    mapsUrl: "https://maps.app.goo.gl/efinqovsNzHuGPzp7",
    pricelistUrl: "[LINK_PRICELIST_CILEUNYI]",
    photo: "/images/cabang-cileunyi.jpg"
  }
];

export const registrations = [
  {
    title: "Siswa Baru",
    description: "Daftarkan putra-putri Anda sebagai siswa baru di Main Riang Preschool.",
    icon: "UserPlus",
    url: "https://mainriang.app/siswa-baru"
  },
  {
    title: "Trial Class",
    description: "Ikuti kelas percobaan agar anak mengenal suasana belajar di Main Riang.",
    icon: "FlaskConical",
    url: "https://mainriang.app/trial-class"
  },
  {
    title: "Kelas Tematik",
    description: "Jelajahi berbagai kelas tematik seru yang memperkaya pengalaman belajar anak.",
    icon: "Palette",
    url: "https://mainriang.app/tematik"
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

export type Testimonial = {
  photo: string;
  parentName: string;
  childName: string;
  message: string;
};

export const testimonials: Testimonial[] = [
  {
    photo: "[FOTO_ORANG_TUA_1]",
    parentName: "[NAMA ORANG TUA 1]",
    childName: "[NAMA ANAK 1]",
    message: "[ISI TESTIMONI 1]"
  },
  {
    photo: "[FOTO_ORANG_TUA_2]",
    parentName: "[NAMA ORANG TUA 2]",
    childName: "[NAMA ANAK 2]",
    message: "[ISI TESTIMONI 2]"
  },
  {
    photo: "[FOTO_ORANG_TUA_3]",
    parentName: "[NAMA ORANG TUA 3]",
    childName: "[NAMA ANAK 3]",
    message: "[ISI TESTIMONI 3]"
  }
];

export const trilogi = [
  { number: "01", title: "[TRILOGI 1]", description: "[DESKRIPSI TRILOGI 1]" },
  { number: "02", title: "[TRILOGI 2]", description: "[DESKRIPSI TRILOGI 2]" },
  { number: "03", title: "[TRILOGI 3]", description: "[DESKRIPSI TRILOGI 3]" }
];

export type GalleryItem = {
  title: string;
  photo: string;
};

export const gallery: GalleryItem[] = [
  { title: "Montessori Activity", photo: "[FOTO_GALLERY_1]" },
  { title: "Outdoor Activity", photo: "[FOTO_GALLERY_2]" },
  { title: "Islamic Activity", photo: "[FOTO_GALLERY_3]" },
  { title: "Art & Creativity", photo: "[FOTO_GALLERY_4]" },
  { title: "Practical Life", photo: "[FOTO_GALLERY_5]" },
  { title: "Classroom", photo: "[FOTO_GALLERY_6]" },
  { title: "Playground", photo: "[FOTO_GALLERY_7]" },
  { title: "Daycare", photo: "[FOTO_GALLERY_8]" }
];

export function whatsappUrl(branch: Branch) {
  const number = branch.whatsapp.replace(/\D/g, "");
  if (!number || branch.whatsapp.includes("[")) return "#";
  const message = encodeURIComponent(
    `Assalamu'alaikum, saya ingin mendapatkan informasi pendaftaran Main Riang Preschool Cabang ${branch.shortName}.`
  );
  return `https://wa.me/${number}?text=${message}`;
}