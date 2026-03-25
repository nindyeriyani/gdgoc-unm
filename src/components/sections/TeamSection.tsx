"use client";

import { useState } from "react";
import Image from "next/image";
import { teamPages } from "@/data/team";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaArrowLeft,
  FaArrowRight,
  FaBehance,
  FaDribbble,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TeamSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? teamPages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev === teamPages.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  // Default ke empty array kalau belum ada data
  const currentMembers = teamPages[currentPage] || [];

  return (
    <section
      id="tim"
      className="bg-[#F4F9FF] pt-32 pb-24 px-6 md:px-16 text-center relative overflow-hidden min-h-[70vh] flex flex-col justify-center scroll-mt-5"
    >
      <div className="w-full max-w-6xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Tim Kami
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Tim kami terdiri dari individu yang berdedikasi untuk mewujudkan
          setiap program melalui kolaborasi, kreativitas, dan inovasi demi
          memberdayakan komunitas lewat teknologi dan pembelajaran bersama.
        </p>
      </div>

      {/* Navigasi Kiri */}
      <button
        onClick={handlePrev}
        className="cursor-pointer absolute left-2 lg:left-32 top-1/2 -translate-y-1/2 bg-transparent border-[2px] border-[#FF8D28] p-2 hover:p-3 rounded-full text-[#FF8D28] hover:bg-[#FF8D28] hover:text-white transition-all duration-300 z-10 flex items-center justify-center"
      >
        <FaArrowLeft size={16} />
      </button>

      {/* Cards Wrapper */}
      <div className="relative overflow-hidden min-h-[450px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="flex justify-center items-stretch gap-8 sm:gap-12 lg:gap-16 flex-wrap md:flex-nowrap px-16 sm:px-24"
          >
            {currentMembers.map((member, index) => (
              <div
                key={index}
                className="bg-transparent flex flex-col items-start w-full sm:w-[260px] transition-all duration-300 group h-full"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] h-[320px] mb-4 transition-all duration-300 flex items-center justify-center bg-transparent">
                  {/* Background Shape Image */}
                  <Image
                    src="/images/bg-team.png"
                    alt="Background Shape"
                    fill
                    className="object-contain object-bottom z-0"
                  />
                  {/* Member Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-bottom relative z-10"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow w-full text-left">
                  <h3 className="text-[14px] sm:text-[17px] font-bold text-[#4A4A4A] mb-1 line-clamp-1 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-[#848484] text-[11px] font-semibold mb-2">
                    {member.division}
                  </p>

                  <div className="mt-auto w-full text-left">
                    {/* Orange Line Separator */}
                    <div className="w-full h-[1px] bg-[#FF8D28]/50 my-2"></div>

                    {/* Social Links */}
                    <div className="flex gap-2 text-white">
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FF8D28] p-1.5 rounded-md hover:scale-110 transition-transform"
                        >
                          <FaInstagram size={17} />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FF8D28] p-1.5 rounded-md hover:scale-110 transition-transform"
                        >
                          <FaLinkedin size={17} />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FF8D28] p-1.5 rounded-md hover:scale-110 transition-transform flex items-center justify-center font-bold"
                        >
                          <FaGithub size={17} />
                        </a>
                      )}
                      {member.x && (
                        <a
                          href={member.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FF8D28] p-1.5 rounded-md hover:scale-110 transition-transform flex items-center justify-center font-bold"
                        >
                          <FaXTwitter size={17} />
                        </a>
                      )}
                      {member.behance && (
                        <a
                          href={member.behance}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FF8D28] p-1.5 rounded-md hover:scale-110 transition-transform flex items-center justify-center font-bold"
                        >
                          <FaBehance size={17} />
                        </a>
                      )}
                      {member.dribbble && (
                        <a
                          href={member.dribbble}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FF8D28] p-1.5 rounded-md hover:scale-110 transition-transform flex items-center justify-center font-bold"
                        >
                          <FaDribbble size={17} />
                        </a>
                      )}
                      {member.tiktok && (
                        <a
                          href={member.tiktok}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FF8D28] p-1.5 rounded-md hover:scale-110 transition-transform flex items-center justify-center font-bold"
                        >
                          <FaTiktok size={17} />
                        </a>
                      )}
                      {member.youtube && (
                        <a
                          href={member.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FF8D28] p-1.5 rounded-md hover:scale-110 transition-transform flex items-center justify-center font-bold"
                        >
                          <FaYoutube size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={handleNext}
        className="cursor-pointer absolute right-2 lg:right-32 top-1/2 -translate-y-1/2 bg-transparent border-[2px] border-[#FF8D28] p-2 hover:p-3 rounded-full text-[#FF8D28] hover:bg-[#FF8D28] hover:text-white transition-all duration-300 z-10 flex items-center justify-center"
      >
        <FaArrowRight size={16} />
      </button>
    </section>
  );
}
