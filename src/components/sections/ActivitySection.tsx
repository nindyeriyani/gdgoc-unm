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
      className="bg-white min-h-[100dvh] flex flex-col items-center justify-center py-20 text-gray-800"
    >
      <div className="section-container flex flex-col items-center text-center px-6 sm:px-10 md:px-16">
        {/* Header dengan animasi */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 12,
          }}
        >
          <h2 className="responsive-heading font-semibold mb-4 text-gray-800">
            Aktivitas Kami
          </h2>
          <p className="responsive-text max-w-4xl mx-auto text-gray-500 mb-12 sm:mb-16 leading-relaxed sm:leading-loose">
            Kegiatan rutin yang mempertemukan tim inti, mahasiswa Google
            Developer Academy, dan masyarakat umum untuk belajar, berbagi, dan
            tumbuh bersama. Di sini, kita menjelajahi inovasi dan tren teknologi
            terbaru agar selalu selangkah lebih maju.
          </p>
        </motion.div>

        {/* Grid kartu aktivitas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 12,
                delay: i * 0.15,
              }}
              className="bg-white shadow-md rounded-2xl p-6 sm:p-8 w-full max-w-[280px] sm:max-w-xs min-h-[22rem] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 sm:mb-6">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={120}
                  height={120}
                  className="w-[70px] sm:w-[100px] md:w-[120px] h-auto"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 text-gray-800">
                {activity.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
