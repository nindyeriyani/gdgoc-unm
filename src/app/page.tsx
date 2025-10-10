import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ActivitySection from "@/components/sections/ActivitySection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ActivitySection />
    </main>
  );
}
