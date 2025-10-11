import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F3F7FC] py-10 text-center">
      {/* Navigation Links */}
      <div className="flex justify-center gap-8 mb-6 text-gray-700 font-medium">
        <Link href="#tentang" className="hover:text-black transition">
          Tentang
        </Link>
        <Link href="#aktivitas" className="hover:text-black transition">
          Aktivitas Kami
        </Link>
        <Link href="#weekly-class" className="hover:text-black transition">
          Weekly Class
        </Link>
        <Link href="#google-event" className="hover:text-black transition">
          Google Event
        </Link>
        <Link href="#tim" className="hover:text-black transition">
          Tim
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-6">
        <a
          href="https://www.instagram.com/gdgoc.unm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF8D28] p-1 rounded-md text-white text-xl hover:scale-110 transition-transform"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/gdscunm/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF8D28] p-1 rounded-md text-white text-xl hover:scale-110 transition-transform"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.tiktok.com/@gdgoc.unm?_t=ZS-90RxROIdoTR&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF8D28] p-1 rounded-md text-white text-xl hover:scale-110 transition-transform"
        >
          <FaTiktok />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-600 text-sm">
        © 2025 GDGoC UNM. All Rights Reserved
      </p>
    </footer>
  );
}
