import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-semibold">
          Fine Learning London
        </span>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
