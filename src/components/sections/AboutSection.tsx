"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="bg-[#EEF2F6] min-h-[100dvh] flex flex-col justify-center items-center text-center text-gray-800"
    >
      <div className="section-container flex flex-col items-center justify-center">
        {/* Header */}
        <div className="mb-10">
          <h2 className="responsive-heading font-semibold mb-6 text-gray-800">
            Tentang
          </h2>
          <div className="flex items-center justify-center">
            <Image
              src="/logo-gdgoc-unm-b.png"
              alt="GDG On Campus Logo"
              width={400}
              height={60}
              className="w-[60vw] max-w-[380px] h-auto mx-auto"
            />
          </div>
        </div>

        {/* Paragraph */}
        <div className="max-w-4xl mx-auto responsive-text text-gray-700 leading-relaxed sm:leading-loose mt-4 sm:mt-8 px-6">
          <p>
            <strong>
              Google Developer Group On Campus (GDSC) Universitas Negeri
              Makassar
            </strong>{" "}
            adalah komunitas mahasiswa yang berfokus pada pengembangan teknologi
            Google. Kami terbuka untuk <strong>seluruh mahasiswa</strong> dari
            berbagai jenjang yang ingin{" "}
            <strong>
              belajar, berkolaborasi, dan berkembang sebagai developer
            </strong>
            . Melalui pembelajaran berbasis <strong>peer-to-peer</strong>,
            anggota GDSC UNM berkesempatan untuk membangun keterampilan praktis,
            mengembangkan proyek nyata, dan menjadi bagian dari{" "}
            <strong>komunitas global Google Developer</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
