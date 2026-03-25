"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="bg-[#F0F5FA] min-h-screen flex flex-col justify-center items-center text-center text-gray-800 pt-32 pb-20 px-6 scroll-mt-5"
    >
      {/* Top section: h2 and logo */}
      <div className="w-full max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-10">
          Tentang
        </h2>
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/logo-gdgoc-unm-b.png"
            alt="GDG On Campus Logo"
            width={400}
            height={60}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Middle section: paragraph centered */}
      <div className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 mt-6">
        <p>
          <strong>
            Google Developer Group On Campus (GDSC) Universitas Negeri Makassar
          </strong>{" "}
          adalah komunitas mahasiswa yang berfokus pada pengembangan teknologi
          Google. Kami terbuka untuk <strong>seluruh mahasiswa</strong> dari
          berbagai jenjang yang ingin{" "}
          <strong>
            belajar, berkolaborasi, dan berkembang sebagai developer
          </strong>
          . Melalui pembelajaran berbasis <strong>peer-to-peer</strong>, anggota
          GDSC UNM berkesempatan untuk membangun keterampilan praktis,
          mengembangkan proyek nyata, dan menjadi bagian dari{" "}
          <strong>komunitas global Google Developer</strong>.
        </p>
      </div>
    </section>
  );
}
