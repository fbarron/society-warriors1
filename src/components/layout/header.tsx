"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
  return (
    <header className="w-full fixed top-0 left-0 bg-palette-1 shadow z-50 flex items-center justify-between px-8 py-4">
      <img src="/favicon/favicon.ico" alt="Society Warriors Logo" className="h-10 border-2 border-palette-5 rounded-full" />

      <nav className="space-x-6">
        <Link href="/" className={`text-lg font-semibold text-palette-4 border-2 border-palette-1 bg-palette-3 rounded-lg hover:bg-palette-4 hover:text-palette-1 px-3 py-1 transition-colors ${pathname === '/' ? 'underline underline-offset-6 decoration-2' : ''}`}>
          Home
        </Link>
        <Link href="/login" className={`text-lg font-semibold text-palette-4 border-2 border-palette-1 bg-palette-3 rounded-lg hover:bg-palette-4 hover:text-palette-1 px-3 py-1 transition-colors ${pathname === '/login' ? 'underline underline-offset-6 decoration-2' : ''}`}>
          Login
        </Link>
        <Link href="/register" className={`text-lg font-semibold text-palette-4 border-2 border-palette-1 bg-palette-3 rounded-lg hover:bg-palette-4 hover:text-palette-1 px-3 py-1 transition-colors ${pathname === '/register' ? 'underline underline-offset-6 decoration-2' : ''}`}>
          Register
        </Link>
      </nav>
    </header>
  );
}