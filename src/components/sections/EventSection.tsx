"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "@/data/events";

export default function EventSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="google-event"
      className="bg-white min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-16 md:pb-24 px-6 relative scroll-mt-5 overflow-hidden"
    >
      {/* === Header === */}
      <div className="w-full max-w-6xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Google Event
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Temukan berbagai acara dan kompetisi dari Google yang bisa kamu ikuti
          untuk mengasah kemampuan, menambah pengalaman, dan terus berkembang di
          dunia teknologi.
        </p>
      </div>

      {/* === Carousel Content === */}
      <div className="w-full max-w-6xl mx-auto relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <div
            key={current}
            className="grid md:grid-cols-2 items-center gap-10 md:gap-20 text-center md:text-left"
          >
            {/* Image Container */}
            <motion.div
              initial={{
                opacity: 0,
                x: events[current].imagePosition === "left" ? 100 : -100,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: events[current].imagePosition === "left" ? -100 : 100,
              }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className={`flex justify-center ${events[current].imagePosition === "left" ? "md:order-1" : "md:order-2"}`}
            >
              <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px]">
                <Image
                  src={events[current].image}
                  alt={events[current].title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Text Container */}
            <motion.div
              initial={{
                opacity: 0,
                x: events[current].imagePosition === "left" ? -100 : 100,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: events[current].imagePosition === "left" ? 100 : -100,
              }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className={`space-y-4 md:space-y-6 ${events[current].imagePosition === "left" ? "md:order-2" : "md:order-1"}`}
            >
              <h3 className="text-2xl md:text-5xl font-bold text-gray-900">
                {events[current].title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                {events[current].description}
              </p>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* === Button === */}
      <Link
        href="https://developers.google.com/events"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FF8D28] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#e97c20] shadow-md hover:shadow-lg transition-all duration-300 mt-16 md:mt-3 inline-block"
      >
        Lebih Banyak
      </Link>
    </section>
  );
}
