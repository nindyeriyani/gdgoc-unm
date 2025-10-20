"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Tentang", path: "#tentang" },
  { name: "Aktivitas Kami", path: "#aktivitas" },
  { name: "Weekly Class", path: "#weekly-class" },
  { name: "Google Event", path: "#google-event" },
  { name: "Tim", path: "#tim" },
  { name: "Galeri", path: "#galeri" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-6 lg:px-8">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3">
          <Image
            src="/logo-gdgoc-unm-b.png"
            alt="GDGoC UNM Logo"
            width={320}
            height={40}
            priority
            className="cursor-pointer w-auto h-auto lg:w-[240px]"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`text-base font-medium transition-all duration-200 ${
                pathname === link.path
                  ? "text-[#404040] [text-shadow:_0_0_0.6px_#404040]"
                  : "text-[#808080] hover:text-[#404040] hover:[text-shadow:_0_0_0.6px_#404040]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Button tetap tampil di semua ukuran */}
        <Link
          href="https://gdg.community.dev/gdg-on-campus-universitas-negeri-makassar-makassar-indonesia/"
          target="_blank"
          className="ml-4 bg-[#FF8D28] text-white px-5 py-3 rounded-lg font-bold text-base hover:bg-[#e97c20] transition-colors"
        >
          Daftar Member
        </Link>
      </div>
    </nav>
  );
}
