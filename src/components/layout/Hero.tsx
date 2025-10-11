"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.JPG"
          alt="GDGoC UNM Hero Background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#FF8D28]/70 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="section-container relative text-white flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/logo-gdgdoc-unm.png"
            alt="GDGoC UNM Logo"
            width={480}
            height={70}
            className="w-[50vw] max-w-[420px] h-auto"
            priority
          />
        </div>

        {/* Tagline Box */}
        <div className="bg-white/25 backdrop-blur-md border border-white/40 rounded-full px-8 py-4 mb-5 shadow-md">
          <h1 className="responsive-heading font-semibold text-white tracking-wide">
            Learn Together, Grow Together
          </h1>
        </div>

        {/* Subtitle */}
        <p className="responsive-text text-gray-100 mb-12 max-w-2xl leading-relaxed">
          Sebuah komunitas bagi para pembelajar, pengembang, dan inovator di
          Universitas Negeri Makassar.
        </p>
      </div>

      {/* Scroll Button */}
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
