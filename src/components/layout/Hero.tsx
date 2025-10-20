"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden pb-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-background.png"
          alt="GDGoC UNM Hero Background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#FF8D28]/70 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl px-6 text-white flex flex-col items-center justify-center">
        {/* Logo + Title */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/logo-gdgdoc-unm.png"
              alt="GDGoC UNM Logo"
              width={540}
              height={80}
              priority
            />
          </div>
        </div>

        {/* Tagline Box */}
        <div className="bg-white/25 backdrop-blur-md border border-white/50 rounded-full px-8 py-4 mb-4 shadow-md">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Learn Together, Grow Together
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-100 mb-8 max-w-xl">
          Sebuah komunitas bagi para pembelajar, pengembang, dan inovator di
          Universitas Negeri Makassar.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium text-base hover:bg-white/20 transition-all duration-300 cursor-pointer animate-float"
      >
        Selengkapnya <ChevronDown size={18} />
      </button>
    </section>
  );
}
