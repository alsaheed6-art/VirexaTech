import Link from 'next/link';
import { Menu } from 'lucide-react';
import { navItems } from '@/data';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 font-black text-xl text-white shadow-glow">V</div>
          <div className="text-lg font-semibold tracking-tight">VirexaTech</div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="secondary-btn">Log in</button>
          <Link href="/jobs" className="primary-btn">Hire Talent</Link>
        </div>

        <button className="rounded-full border border-white/10 p-2 text-slate-200 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
