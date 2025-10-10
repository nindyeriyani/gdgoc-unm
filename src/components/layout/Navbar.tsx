"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Tentang", path: "/tentang" },
  { name: "Aktivitas Kami", path: "/aktivitas" },
  { name: "Weekly Class", path: "/weekly-class" },
  { name: "Google Event", path: "/google-event" },
  { name: "Tim", path: "/tim" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-gdgoc-unm-b.png"
            alt="GDGoC UNM Logo"
            width={320}
            height={40}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-base transition-colors hover:text-[#404040] ${
                  isActive
                    ? "text-[#404040] font-semibold"
                    : "text-[#404040] hover:font-semibold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Button */}
          <Link
            href="https://gdg.community.dev/gdg-on-campus-universitas-negeri-makassar-makassar-indonesia/"
            target="_blank"
            className="ml-4 bg-[#FF8D28] text-white px-5 py-3 rounded-lg font-bold text-base hover:bg-[#e97c20] transition-colors"
          >
            Daftar Member
          </Link>
        </div>
      </div>
    </nav>
  );
}
