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
    name: "Nurhidayat",
    role: "Mahasiswa JTIK",
    message:
      "Menjadi bagian dari GDGoC Universitas Negeri Makassar adalah pengalaman yang sangat berharga bagi saya. Setiap pertemuan dan workshop memberikan wawasan baru tentang dunia teknologi. Saya juga belajar bagaimana bekerja secara kolaboratif dalam tim lintas jurusan. Lingkungannya positif dan penuh semangat belajar. Ini benar-benar komunitas yang membantu saya tumbuh secara profesional dan pribadi.",
    avatar: "/icons/user.png",
  },
  {
    id: 2,
    name: "Fadhil",
    role: "Mahasiswa JTIK",
    message:
      "GDGoC UNM memberi saya kesempatan untuk memperluas koneksi dan memperdalam pemahaman tentang teknologi terkini. Melalui event dan proyek komunitas, saya belajar bagaimana menerapkan teori kuliah dalam praktik nyata. Mentor dan anggotanya sangat suportif, membuat proses belajar terasa menyenangkan. Saya merasa lebih percaya diri menghadapi dunia kerja di bidang teknologi. Bergabung di sini adalah keputusan terbaik yang pernah saya ambil.",
    avatar: "/icons/user.png",
  },
  {
    id: 3,
    name: "Faldi",
    role: "Mahasiswa Desain Komunikasi Visual",
    message:
      "Workshop dan kelas yang diadakan oleh GDGoC UNM benar-benar membuka wawasan saya tentang UI/UX. Materinya disampaikan dengan cara yang mudah dipahami bahkan oleh pemula. Saya belajar tidak hanya desain antarmuka, tetapi juga bagaimana memahami pengalaman pengguna secara mendalam. Setiap kegiatan selalu seru dan memotivasi saya untuk terus berkembang. Komunitas ini membuat saya semakin mencintai dunia desain digital.",
    avatar: "/icons/user.png",
  },
  {
    id: 4,
    name: "Fahri",
    role: "Mahasiswa JTIK",
    message:
      "Bergabung dengan GDGoC UNM membuat saya lebih disiplin dan semangat dalam mempelajari hal-hal baru di bidang teknologi. Kegiatan seperti coding challenge dan mentoring session memberi pengalaman nyata yang tidak didapat di kelas. Saya juga bertemu dengan banyak teman yang memiliki minat serupa, sehingga kami sering berdiskusi dan saling belajar. Suasananya sangat inklusif dan mendukung pertumbuhan semua anggota. Saya sangat bersyukur bisa menjadi bagian dari komunitas ini.",
    avatar: "/icons/user.png",
  },
  {
    id: 5,
    name: "Nabila",
    role: "Mahasiswa JTIK",
    message:
      "Saya sangat menikmati setiap kegiatan di GDGoC UNM karena selalu memberikan pengalaman belajar yang berbeda. Tidak hanya fokus pada aspek teknis, tetapi juga pengembangan soft skill seperti komunikasi dan kerja tim. Para pemateri dan fasilitator selalu memberikan inspirasi lewat pengalaman mereka di dunia industri. Saya merasa lebih siap menghadapi tantangan dunia digital. Komunitas ini benar-benar tempat yang ideal untuk berkembang.",
    avatar: "/icons/user.png",
  },
];
