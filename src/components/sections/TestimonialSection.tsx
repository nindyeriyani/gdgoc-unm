"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimoni"
      className="bg-white flex flex-col justify-center items-center py-24 px-6 md:px-16 scroll-mt-5"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Header */}
        <div className="w-full max-w-6xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Cerita Para Member
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative w-full max-w-5xl mb-8">
          <div className="relative min-h-[300px] md:min-h-[200px] w-full">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative absolute inset-0 bg-white rounded-[1.5rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-start"
              >
                {/* Quote kecil kiri atas */}
                <FaQuoteLeft className="absolute top-4 left-6 md:left-10 text-xl text-[#4A4A4A] opacity-60" />

                {/* Text */}
                <p className="text-[#4A4A4A] text-[16px] leading-relaxed font-medium mb-6 max-w-4xl mt-4">
                  {testimonials[current].message}
                </p>

                {/* Author Info */}
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-12 h-12 relative flex items-center justify-center">
                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={testimonials[current].avatar}
                        alt={testimonials[current].name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-bold text-[#4A4A4A] leading-tight">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-[#848484] font-medium text-xs mt-0.5">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Contols */}
        <div className="flex items-center gap-8 md:gap-12 mt-4">
          <button
            onClick={handlePrev}
            className="text-[#4A4A4A] font-semibold text-lg hover:text-[#FF8D28] transition-colors cursor-pointer"
          >
            Kembali
          </button>

          {/* Dots */}
          <div className="flex items-center gap-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className="relative flex items-center justify-center w-6 h-6 cursor-pointer"
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                {/* Outer Ring */}
                <span
                  className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
                    current === idx
                      ? "border-[#FF8D28] scale-100"
                      : "border-[#FF8D28]/30 scale-75"
                  }`}
                />
                {/* Inner Dot */}
                <span
                  className={`w-2.5 h-2.5 rounded-full bg-[#FF8D28] transition-all duration-300 ${
                    current === idx
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-[#4A4A4A] font-semibold text-lg hover:text-[#FF8D28] transition-colors cursor-pointer"
          >
            Berikutnya
          </button>
        </div>
      </div>
    </section>
  );
}
