"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const allImages = [
  { src: "/images/hero.JPG", alt: "Kolaborasi Tim" },
  {
    src: "/images/galeri/onboarding.jpeg",
    alt: "On Boarding Member GDGoC UNM",
  },
  { src: "/images/galeri/weekly-class.jpeg", alt: "Weekly Class" },
  { src: "/images/galeri/juara-gcp.jpeg", alt: "Juara GCP" },
  { src: "/images/galeri/study-jam.jpeg", alt: "Study Jam" },
  {
    src: "/images/galeri/tri-wulan.jpeg",
    alt: "Triwulan Core Team GDGoC UNM",
  },
];

export default function GallerySection() {
  const [index, setIndex] = useState(0);
  const [layoutType, setLayoutType] = useState(0); // 0 or 1 for layout variation

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % allImages.length);
      // Change layout every 2 rotations for better UX
      if ((index + 1) % 2 === 0) {
        setLayoutType((prev) => (prev === 0 ? 1 : 0));
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  // Get 3 images based on current index
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      images.push(allImages[(index + i) % allImages.length]);
    }
    return images;
  };

  const visibleImages = getVisibleImages();

  return (
    <section
      id="galeri"
      className="min-h-screen flex flex-col justify-center pt-20 pb-12 px-6 md:px-16 bg-white overflow-hidden scroll-mt-5"
    >
      <div className="w-full max-w-6xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Galeri
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Sekilas perjalanan kami mulai dari kolaborasi tim hingga kegiatan
          penuh inspirasi. Galeri ini menampilkan momen-momen berharga dari core
          team dan member GDGoC UNM saat belajar, berbagi, dan tumbuh bersama
          dalam semangat teknologi dan inovasi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 h-auto lg:h-[50vh] min-h-[400px] max-w-5xl mx-auto w-full">
        {/* Large Image Slot */}
        <motion.div
          layout
          key={`large-${visibleImages[0].src}`}
          className={`relative min-h-[250px] h-full overflow-hidden rounded-[2rem] shadow-xl lg:col-span-2 ${
            layoutType === 0 ? "lg:order-1" : "lg:order-2"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            layout: { type: "spring", stiffness: 200, damping: 25 },
            opacity: { duration: 0.5 },
          }}
        >
          <Image
            src={visibleImages[0].src}
            alt={visibleImages[0].alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Small Images Container */}
        <motion.div
          layout
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 h-full ${
            layoutType === 0 ? "lg:order-2" : "lg:order-1"
          }`}
          transition={{
            layout: { type: "spring", stiffness: 200, damping: 25 },
          }}
        >
          <motion.div
            layout
            key={`small1-${visibleImages[1].src}`}
            className="relative overflow-hidden rounded-[2rem] shadow-md min-h-[150px] h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { duration: 0.5 } }}
          >
            <Image
              src={visibleImages[1].src}
              alt={visibleImages[1].alt}
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            layout
            key={`small2-${visibleImages[2].src}`}
            className="relative overflow-hidden rounded-[2rem] shadow-md min-h-[150px] h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ opacity: { duration: 0.5 } }}
          >
            <Image
              src={visibleImages[2].src}
              alt={visibleImages[2].alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
