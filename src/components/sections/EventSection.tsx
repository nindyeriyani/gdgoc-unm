"use client";

import Image from "next/image";
import Link from "next/link";

export default function GoogleEventSection() {
  return (
    <section
      id="google-event"
      className="bg-white min-h-screen flex flex-col items-center justify-center py-16 md:py-24 relative"
    >
      {/* === Header === */}
      <div className="section-container text-center mb-12 md:mb-16">
        <h2 className="responsive-heading font-semibold text-gray-800 mb-4">
          Google Event
        </h2>
        <p className="responsive-text text-gray-500 max-w-4xl mx-auto">
          Temukan berbagai acara dan kompetisi dari Google yang bisa kamu ikuti
          untuk mengasah kemampuan, menambah pengalaman, dan terus berkembang di
          dunia teknologi.
        </p>
      </div>

      {/* === Content === */}
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 text-center md:text-left">
        {/* Left Text */}
        <div className="flex-1 space-y-4 md:space-y-6">
          <h3 className="responsive-heading text-2xl md:text-3xl font-bold text-gray-900">
            #JuaraGCP
          </h3>
          <p className="responsive-text text-gray-700 leading-relaxed">
            <strong>JuaraGCP</strong> adalah program pembelajaran cloud
            computing bagi developer Indonesia melalui <strong>Qwiklabs</strong>
            . Ikuti pelatihannya, kuasai teknologi cloud, dan bersiaplah meraih{" "}
            <strong>sertifikasi GCP</strong> untuk mengembangkan kariermu di
            dunia digital.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/google-cloud.png"
            alt="Google Cloud Logo"
            width={220}
            height={220}
            className="object-contain md:w-[280px] md:h-[280px]"
          />
        </div>
      </div>

      {/* === Button === */}
      <Link
        href="https://developers.google.com/events"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#F58634] text-white font-medium px-6 py-3 rounded-md hover:bg-[#e97b2f] transition-all duration-200 mt-16 md:mt-20"
      >
        Lebih Banyak
      </Link>
    </section>
  );
}
