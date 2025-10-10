"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 text-center flex flex-col justify-center items-center">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
          Cerita Para Member GDGoC UNM
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="bg-white shadow-md rounded-2xl p-10 max-w-5xl w-full mx-auto flex flex-col items-start text-left mb-10 border border-gray-100">
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
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={handlePrev}
          className="text-gray-600 font-medium px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          Kembali
        </button>
        {/* Pagination Dots */}
        <div className="flex gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-5 h-5 rounded-full border-2 ${
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
          className="text-gray-600 font-medium px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          Berikutnya
        </button>
      </div>
    </section>
  );
}
