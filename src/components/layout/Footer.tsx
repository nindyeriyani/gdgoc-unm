import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-12 text-center border-t border-gray-100">
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-gray-700 font-semibold text-sm md:text-base">
        <Link
          href="#tentang"
          className="hover:text-[#FF8D28] transition-colors"
        >
          Tentang
        </Link>
        <Link
          href="#aktivitas"
          className="hover:text-[#FF8D28] transition-colors"
        >
          Aktivitas Kami
        </Link>
        <Link
          href="#weekly-class"
          className="hover:text-[#FF8D28] transition-colors"
        >
          Weekly Class
        </Link>
        <Link
          href="#google-event"
          className="hover:text-[#FF8D28] transition-colors"
        >
          Google Event
        </Link>
        <Link href="#tim" className="hover:text-[#FF8D28] transition-colors">
          Tim
        </Link>
        <Link href="#galeri" className="hover:text-[#FF8D28] transition-colors">
          Galeri
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mb-8">
        <a
          href="https://www.instagram.com/gdgoc.unm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF8D28] p-2 rounded-lg text-white text-xl hover:bg-[#e97c20] hover:-translate-y-1 transition-all shadow-sm"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/gdscunm/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF8D28] p-2 rounded-lg text-white text-xl hover:bg-[#e97c20] hover:-translate-y-1 transition-all shadow-sm"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.tiktok.com/@gdgoc.unm?_t=ZS-90RxROIdoTR&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF8D28] p-2 rounded-lg text-white text-xl hover:bg-[#e97c20] hover:-translate-y-1 transition-all shadow-sm"
        >
          <FaTiktok />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} GDGoC UNM. All Rights Reserved
      </p>
    </footer>
  );
}
