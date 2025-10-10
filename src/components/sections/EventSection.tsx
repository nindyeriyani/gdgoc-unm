"use client";

import Image from "next/image";
import Link from "next/link";

export default function GoogleEventSection() {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center pt-24 md:pt-20 pb-40 px-6 md:px-16 relative">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Google Event
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          Temukan berbagai acara dan kompetisi dari Google yang bisa kamu ikuti
          untuk mengasah kemampuan, menambah pengalaman, dan terus berkembang di
          dunia teknologi.
        </p>
      </div>

      {/* Content section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
        {/* Left text section */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            #JuaraGCP
          </h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            <strong>JuaraGCP</strong> adalah program pembelajaran cloud
            computing bagi developer Indonesia melalui <strong>Qwiklabs</strong>
            . Ikuti pelatihannya, kuasai teknologi cloud, dan bersiaplah meraih{" "}
            <strong>sertifikasi GCP</strong> untuk mengembangkan kariermu di
            dunia digital.
          </p>
        </div>

        {/* Right image section */}
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/images/google-cloud.png"
              alt="Google Cloud Logo"
              width={280}
              height={280}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <Link
        href="https://developers.google.com/events"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#F58634] text-white font-medium px-6 py-3 rounded-md hover:bg-[#e97b2f] transition-all duration-200 absolute left-1/2 -translate-x-1/2 bottom-24"
      >
        Lebih Banyak
      </Link>
    </section>
  );
}
