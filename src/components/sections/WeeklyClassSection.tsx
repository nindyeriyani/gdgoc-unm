"use client";

import Image from "next/image";
import { weeklyClasses } from "@/data/weeklyClass";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function WeeklyClassSection() {
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Saat auto-scroll aktif, animasikan x dari 0 ke -50% secara berulang
  useEffect(() => {
    if (!isDragging && !isHovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [isDragging, isHovered, controls]);

  return (
    <section className="bg-[#EEF6FF] py-20 text-center overflow-hidden relative min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Weekly Class
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto mb-16">
          Belajar, berbagi, dan tumbuh bersama di Weekly Class, tempat para
          pengembang dan pecinta teknologi terus melangkah maju di era digital
          yang dinamis.
        </p>
      </div>

      {/* Container cards */}
      <div
        className="relative w-full overflow-hidden min-h-80 py-10 cursor-grab"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <motion.div
          className="flex gap-6"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          animate={controls}
        >
          {[...weeklyClasses, ...weeklyClasses].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 min-h-80 flex flex-col items-center justify-center w-[250px] flex-shrink-0"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
