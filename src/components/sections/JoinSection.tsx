"use client";

import Image from "next/image";
import Link from "next/link";

export default function JoinSection() {
  return (
    <section className="bg-white w-full flex justify-center py-10 px-6 relative overflow-visible">
      <div className="bg-[#F58634] rounded-2xl flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 relative overflow-visible">
        {/* Left: Image */}
        <div className="relative flex items-end w-full md:w-1/3 h-full">
          <div className="">
            <Image
              src="/images/join-avatar.png"
              alt="Join GDGoC UNM"
              width={600}
              height={600}
              className="object-contain w-full h-auto ml-8"
            />
          </div>
        </div>

        {/* Right: Text & Button */}
        <div className="flex flex-col items-start justify-center text-white w-full py-10 px-10 md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ayo Join GDGoC UNM!
          </h2>
          <p className="text-base md:text-sm leading-relaxed mb-8">
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
            className="bg-white text-gray-900 font-semibold rounded-full px-8 py-3 text-base shadow hover:bg-gray-100 transition"
          >
            Gabung Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
