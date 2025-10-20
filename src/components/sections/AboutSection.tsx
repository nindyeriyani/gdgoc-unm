"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="bg-[#EEF2F6] min-h-[100dvh] flex flex-col justify-center items-center text-center text-gray-800"
    >
      {/* Top section: h2 and logo */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
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
      <div className="max-w-4xl mx-auto text-base md:text-xl leading-loose text-gray-700 mt-6">
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
