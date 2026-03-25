"use client";

import Image from "next/image";
import Link from "next/link";

export default function JoinSection() {
  return (
    <section className="bg-white w-full flex justify-center py-10 px-6 relative overflow-visible">
      <div className="bg-[#FF8D28] rounded-[2rem] flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 md:gap-12 relative overflow-hidden shadow-lg">
        {/* Left: Image */}
        <div className="relative flex items-center justify-center w-full md:w-5/12 h-full mt-8 md:mt-0">
          <div className="relative w-[85%] md:w-full max-w-[400px]">
            <Image
              src="/images/join-avatar.png"
              alt="Join GDGoC UNM"
              width={600}
              height={600}
              className="object-contain w-full h-auto drop-shadow-xl translate-y-4 md:translate-y-8"
            />
          </div>
        </div>

        {/* Right: Text & Button */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left text-white w-full py-12 px-8 md:pr-16 md:w-7/12 z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-sm">
            Ayo Join GDGoC UNM!
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-8 text-white/95">
            Bergabunglah dengan <strong>GDGoC UNM</strong> dan tumbuh bersama
            komunitas teknologi yang inspiratif. Klik{" "}
            <strong>“Gabung Sekarang”</strong> untuk menjadi bagian dari
            perjalanan kolaborasi dan pembelajaran tanpa batas yang terbuka
            untuk semua mahasiswa yang ingin{" "}
            <strong>berkembang di dunia teknologi.</strong>
          </p>
          <Link
            href="https://gdg.community.dev/gdg-on-campus-universitas-negeri-makassar-makassar-indonesia/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#FF8D28] font-bold rounded-full px-8 py-3.5 text-sm md:text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Gabung Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
