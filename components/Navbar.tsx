"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Fine Learning London Limited"
            width={48}
            height={48}
            priority
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide text-[color:var(--brand-navy)]">
              Fine Learning
            </p>
            <p className="text-xs tracking-[0.2em] text-gray-500">
              LONDON LIMITED
            </p>
          </div>
        </Link>

        <div className="flex gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "px-3 py-2 rounded-lg text-sm font-medium transition",
                  isActive
                    ? "bg-[color:var(--brand-navy)] text-white"
                    : "text-[color:var(--brand-navy)] hover:bg-gray-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
