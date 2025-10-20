"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-background.png"
          alt="GDGoC UNM Hero Background"
          fill
          className="object-cover object-center opacity-25"
          priority
        />
        {/* Orange overlay */}
        <div className="absolute inset-0 bg-[#FF8D28]/80 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl px-6 sm:px-8 md:px-10 text-white flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-4">
        {/* Logo + Title */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/logo-gdgdoc-unm.png"
              alt="GDGoC UNM Logo"
              width={380}
              height={40}
              priority
              className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[320px] h-auto"
            />
          </div>
        </div>

        {/* Tagline Box */}
        <div className="bg-white/25 backdrop-blur-md border border-white/50 rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-md">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-white">
            Learn Together, Grow Together
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-md sm:max-w-lg md:max-w-xl leading-relaxed sm:leading-loose">
          Sebuah komunitas bagi para pembelajar, pengembang, dan inovator di
          Universitas Negeri Makassar.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 cursor-pointer animate-float"
      >
        Selengkapnya <ChevronDown size={18} />
      </button>
    </section>
  );
}
