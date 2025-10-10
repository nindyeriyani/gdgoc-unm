import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ActivitySection from "@/components/sections/ActivitySection";
import WeeklyClassSection from "@/components/sections/WeeklyClassSection";
import GoogleEventSection from "@/components/sections/EventSection";
import TestimonialsSection from "@/components/sections/TestimonialSection";
import JoinSection from "@/components/sections/JoinSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <ActivitySection />
      <WeeklyClassSection />
      <GoogleEventSection />
      <TestimonialsSection />
      <JoinSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
