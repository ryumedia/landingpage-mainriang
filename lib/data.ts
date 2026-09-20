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
    title: "Daycare Class",
    description: "Program untuk anak mulai usia 2-6 tahun dan bisa terintegrasi dengan Playgroup dan TK.",
    items: ["CCTV", "Water Heater", "Mainan Edukatif", "Kamar Nyaman dan Bersih", "Fullday: 08.00 -17.00", "Halfday: 08.00 - 13.00 atau 12.00 - 17.00"]
  },
  {
    title: "Playgroup Class",
    description: "Program untuk anak mulai usia 2-4 tahun dan tersedia kelas pagi (08.00-09.30) dan siang (10.30-12.00).",
    items: ["PG 1: Setiap Jumat (pagi)", "PG 2: Senin dan Rabu (pagi atau siang)", "PG 2: Selasa dan Kamis (pagi atau siang)", "PG 3 : Senin, Rabu, dan Jum'at (pagi)", "PG 3 : Selasa, Kamis dan Jum'at (pagi)", "PG 5 : Senin - Jum'at (pagi)"]
  },
  {
    title: "TK Class",
    description: "Program 2 Kelas (TK A dan TK B) untuk anak mulai usia 4-6 tahun dan hanya tersedia kelas pagi (08.00-11.00).",
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
  { number: "01", title: "ISLAMIC BEHAVIOUR", description: "Membentuk karakter anak yang saleh, berakhlak mulia, serta menanamkan kesadaran dan kecintaan mendalam terhadap ajaran agama Islam sejak dini." },
  { number: "02", title: "5 AREA MONTESSORI", description: "Mengembangkan potensi anak secara holistik terstruktur berdasarkan area Practical Life, Sensorial, Language, Mathematics, dan Cultural Studies." },
  { number: "03", title: "GEMBIRA BERAKSI", description: "Mengasah kreativitas, imajinasi, kemandirian, serta kecerdasan sosial-emosional melalui ekspresi seni, prakarya, musik, dan gerak aktif." }
];

export type CoreApproach = {
  icon: "Heart" | "Brain" | "Lightbulb";
  title: string;
  description: string;
  details: string[];
  image: string;
};

export const coreApproaches: CoreApproach[] = [
  {
    icon: "Heart",
    title: "Islamic Behaviour",
    description: "Kurikulum dirancang untuk membiasakan anak bersikap jujur, sabar, amanah, serta memiliki rasa persaudaraan yang tinggi terhadap sesama teman. -Setiap anak terlahir hebat tergantung bagaimana lingkungannya membentuknya-.",
    details: ["Pembiasaan Praktik Ibadah", "Hafalan Surat Pendek & Doa", "Metode Belajar IQRO", "Sirah Nabawiyah"],
    image: "/images/approach-islamic-behaviour.jpg"
  },
  {
    icon: "Brain",
    title: "5 Area Montessori",
    description: "Pembelajaran melalui lima area Montessori yang menumbuhkan kemandirian, konsentrasi, dan kecintaan belajar.",
    details: ["Practical Life : Membantu anak mengembangkan keterampilan hidup sehari-hari dan kemandirian melalui aktivitas praktis.", "Sensorial : Membantu anak mengembangkan kemampuan indra, fokus, dan pengamatan.", "Language : Membantu anak mengembangkan kemampuan bahasa, komunikasi, dan ekspresi.", "Mathematics : Membantu anak mengembangkan kemampuan berhitung, logika, dan pemecahan masalah.", "Cultural : Membantu anak mengenal lingkungan, budaya, dan kehidupan sosial."],
    image: "/images/approach-5-area-montessori.jpg"
  },
  {
    icon: "Lightbulb",
    title: "Gembira Beraksi",
    description: "Proyek kreatif dan kegiatan bermakna yang membuat anak belajar sambil bermain dengan gembira dan percaya diri.",
    details: ["Pengembangan Motorik & Kognitif", "Kreativitas Tanpa Batas", "Gerak & Musik", "Keterampilan Sosial"],
    image: "/images/approach-gembira-beraksi.jpg"
  }
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