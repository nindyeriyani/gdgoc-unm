"use client";

import { useState } from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import {
  FaInstagram,
  FaLinkedin,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

export default function TeamSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; // tampilkan 3 anggota sekaligus

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? teamMembers.length - visibleCount : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= teamMembers.length ? 0 : prev + 1
    );
  };

  const visibleMembers = teamMembers.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <section
      id="tim"
      className="bg-[#F4F7FC] py-20 px-6 md:px-16 text-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Tim
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Tim kami terdiri dari individu yang berdedikasi untuk mewujudkan
          setiap program melalui kolaborasi, kreativitas, dan inovasi demi
          memberdayakan komunitas lewat teknologi dan pembelajaran bersama.
        </p>

        {/* Navigasi Kiri */}
        <button
          onClick={handlePrev}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-[#F58634] hover:bg-[#F58634] hover:text-white transition"
        >
          <FaArrowLeft />
        </button>

        {/* Cards */}
        <div className="flex justify-center items-stretch gap-8 flex-wrap md:flex-nowrap">
          {visibleMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-3xl flex flex-col items-center text-center p-6 w-full md:w-1/3 transition-transform hover:-translate-y-2"
            >
              <div className="relative w-56 h-72 mb-6">
                <div className="absolute inset-0 bg-[#F8C69F] rounded-[40px] z-0" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain relative z-10 p-3"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{member.division}</p>

              {/* Social Links */}
              <div className="flex gap-3 border-t border-[#F58634] pt-4">
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F58634] hover:text-[#d66d24] transition"
                  >
                    <FaInstagram size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F58634] hover:text-[#d66d24] transition"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {member.optional && (
                  <a
                    href={member.optional}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F58634] hover:text-[#d66d24] transition"
                  >
                    {/* Misal ikon lain (X/Twitter) */}
                    <span className="font-bold text-sm">X</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigasi Kanan */}
        <button
          onClick={handleNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-[#F58634] hover:bg-[#F58634] hover:text-white transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
