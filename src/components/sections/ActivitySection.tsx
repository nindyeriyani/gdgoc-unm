"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { activities } from "@/data/activities";

export default function ActivitySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="aktivitas"
      className="bg-white min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-gray-800 scroll-mt-5"
    >
      {/* Kontainer animasi untuk teks */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 12,
        }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
          Aktivitas Kami
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-center mb-12 md:mb-16">
          Kegiatan rutin yang mempertemukan tim inti, mahasiswa Google Developer
          Academy, dan masyarakat umum untuk belajar, berbagi, dan tumbuh
          bersama. Di sini, kita menjelajahi inovasi dan tren teknologi terbaru
          agar selalu selangkah lebih maju.
        </p>
      </motion.div>

      {/* Grid animasi kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {activities.map((activity, i) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 12,
              delay: i * 0.15, // animasi bertahap
            }}
            className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-8 w-full min-h-[300px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-6 flex-shrink-0">
              <Image
                src={activity.image}
                alt={activity.title}
                width={120}
                height={120}
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
              {activity.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {activity.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
