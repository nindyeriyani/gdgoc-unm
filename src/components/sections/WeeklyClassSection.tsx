"use client";

import Image from "next/image";
import { weeklyClasses } from "@/data/weeklyClass";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function WeeklyClassSection() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const xPos = useRef(0);
  const speed = 1.0; // kecepatan scroll (px per frame)

  // Infinite scroll animation
  useEffect(() => {
    let frame: number;
    const move = () => {
      if (!isHovered && !isDragging) {
        xPos.current -= speed;
        controls.set({ x: xPos.current });
      }
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [isHovered, isDragging, controls]);

  return (
    <section
      id="weekly-class"
      className="bg-[#F4F7FC] flex flex-col items-center justify-center pt-32 pb-20 text-center overflow-hidden relative min-h-screen scroll-mt-5"
    >
      <div className="w-full max-w-6xl mx-auto text-center mb-12 md:mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Weekly Class
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Belajar, berbagi, dan tumbuh bersama di Weekly Class, tempat para
          pengembang dan pecinta teknologi terus melangkah maju di era digital
          yang dinamis.
        </p>
      </div>

      {/* Container cards */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden py-10 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <motion.div
          className="flex gap-6 sm:gap-8"
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          animate={controls}
        >
          {/* Gandakan isi agar tampak terus berjalan */}
          {Array.from({ length: 5 })
            .flatMap(() => weeklyClasses)
            .map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center min-h-[19rem] sm:min-h-[21rem] w-[200px] sm:w-[230px] md:w-[260px] flex-shrink-0 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 sm:w-24 h-20 sm:h-24 mb-4 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="object-contain w-[60px] sm:w-[80px] md:w-[96px] h-auto"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
