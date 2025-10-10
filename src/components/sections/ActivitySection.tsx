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
      className="bg-white min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-16 text-center text-gray-800"
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Aktivitas Kami
        </h2>
        <p className="max-w-5xl mx-auto text-gray-500 mb-16 text-base md:text-lg leading-relaxed">
          Kegiatan rutin yang mempertemukan tim inti, mahasiswa Google Developer
          Academy, dan masyarakat umum untuk belajar, berbagi, dan tumbuh
          bersama. Di sini, kita menjelajahi inovasi dan tren teknologi terbaru
          agar selalu selangkah lebih maju.
        </p>
      </motion.div>

      {/* Grid animasi kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
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
            className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xs min-h-80 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="mb-6">
              <Image
                src={activity.image}
                alt={activity.title}
                width={120}
                height={120}
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
              {activity.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base">
              {activity.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
