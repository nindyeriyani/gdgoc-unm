"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // untuk arah animasi

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Cerita Para Member GDGoC UNM
        </h2>
      </div>

      {/* Wrapper agar navigasi tidak bergeser */}
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        {/* Testimonial Card dengan animasi */}
        <div className="relative w-full h-auto min-h-[380px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full bg-white shadow-md rounded-2xl p-10 mx-auto flex flex-col items-start text-left border border-gray-100"
            >
              <FaQuoteLeft className="text-xl text-gray-400 mb-6" />
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {testimonials[current].message}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 relative rounded-full border flex items-center justify-center">
                  <Image
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="text-gray-600 font-medium px-4 py-2 rounded hover:bg-gray-100 transition cursor-pointer"
          >
            Kembali
          </button>

          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                className={`w-5 h-5 rounded-full border-2 cursor-pointer ${
                  current === idx
                    ? "border-[#F58634] bg-[#F58634]"
                    : "border-[#F58634] bg-transparent"
                } transition`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-gray-600 font-medium px-4 py-2 rounded hover:bg-gray-100 transition cursor-pointer"
          >
            Berikutnya
          </button>
        </div>
      </div>
    </section>
  );
}
