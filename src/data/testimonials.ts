export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rina Oktaviani",
    role: "Mahasiswa JTIK",
    message:
      "Menjadi bagian dari GDGoC Universitas Negeri Makassar adalah perjalanan luar biasa penuh pembelajaran dan pengembangan diri. Melalui setiap sesi dan proyek kolaboratif, saya tidak hanya memperoleh keterampilan teknis, tetapi juga kepercayaan diri untuk berbagi ide dan bekerja dengan orang dari berbagai latar belakang.",
    avatar: "/icons/user.png",
  },
  {
    id: 2,
    name: "Andi Pratama",
    role: "Mobile Developer",
    message:
      "Saya mendapatkan banyak koneksi dan pengalaman berharga melalui event yang diadakan. Komunitasnya sangat suportif!",
    avatar: "/icons/user.png",
  },
  {
    id: 3,
    name: "Siti Rahmawati",
    role: "UI/UX Enthusiast",
    message:
      "Workshop-nya keren banget! Pematerinya profesional dan materinya mudah diikuti bahkan untuk pemula.",
    avatar: "/icons/user.png",
  },
  {
    id: 4,
    name: "Andi Pratama",
    role: "Mobile Developer",
    message:
      "Saya mendapatkan banyak koneksi dan pengalaman berharga melalui event yang diadakan. Komunitasnya sangat suportif!",
    avatar: "/icons/user.png",
  },
  {
    id: 5,
    name: "Siti Rahmawati",
    role: "UI/UX Enthusiast",
    message:
      "Workshop-nya keren banget! Pematerinya profesional dan materinya mudah diikuti bahkan untuk pemula.",
    avatar: "/icons/user.png",
  },
];
