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
      className="bg-[#EEF6FF] py-20 text-center overflow-hidden relative min-h-[100dvh] flex flex-col items-center justify-center"
    >
      {/* Header */}
      <div className="section-container max-w-5xl mx-auto px-6 sm:px-10 md:px-16">
        <h2 className="responsive-heading font-semibold text-gray-800 mb-4">
          Weekly Class
        </h2>
        <p className="responsive-text text-gray-500 max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed sm:leading-loose">
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
                className="bg-white shadow-md rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center min-h-[19rem] sm:min-h-[21rem] w-[200px] sm:w-[230px] md:w-[260px] flex-shrink-0 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
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
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
