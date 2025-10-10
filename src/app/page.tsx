import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ActivitySection from "@/components/sections/ActivitySection";
import WeeklyClassSection from "@/components/sections/WeeklyClassSection";
import GoogleEventSection from "@/components/sections/EventSection";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ActivitySection />
      <WeeklyClassSection />
      <GoogleEventSection />
    </main>
  );
}
