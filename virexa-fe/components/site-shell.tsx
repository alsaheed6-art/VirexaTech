'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Instagram, Linkedin, Mail, Menu, Twitter } from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Talent', href: '/talent' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 sm:gap-4" aria-label="VirexaTech home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 font-black text-xl text-white shadow-glow ring-1 ring-white/10">
            V
          </div>
          <div className="text-base font-semibold tracking-[0.14em] text-white sm:text-lg">VIREXATECH</div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/auth/login" className="secondary-btn">
            Sign in
          </Link>
          <Link href="/dashboard/employer" className="primary-btn">
            Hire Talent
          </Link>
        </div>

        <button
          className="rounded-full border border-white/10 p-2 text-slate-200 lg:hidden"
          aria-label="Open navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 lg:hidden">
          <nav className="section-shell flex flex-col gap-2 py-4 text-sm text-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-xl border border-white/10 px-3 py-2 transition hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#050816] py-16">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 font-black text-xl text-white">
                V
              </div>
              <div className="text-xl font-semibold tracking-[0.12em] text-white">VIREXATECH</div>
            </div>
            <p className="mt-5 max-w-sm text-slate-300">Hire exceptional talent. Build exceptional companies.</p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-sky-400/40 hover:text-white" aria-label={label}>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Platform</div>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li><Link href="/talent">Find Talent</Link></li>
              <li><Link href="/jobs">Jobs Marketplace</Link></li>
              <li><Link href="/services">Business Growth</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Legal</div>
            <ul className="mt-4 space-y-3 text-slate-300">
              {['Privacy', 'Terms', 'Security', 'Cookies'].map((item) => (
                <li key={item}><Link href="/about">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Newsletter</div>
            <p className="mt-4 text-slate-300">Insights on hiring, growth, and AI talent strategy.</p>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2">
              <Mail className="ml-2 h-4 w-4 text-sky-300" />
              <input type="email" placeholder="Your email" className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none" />
              <button className="primary-btn px-4 py-2 text-sm">Join</button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 VirexaTech. Demo content only.</div>
          <div className="flex items-center gap-4">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <span>Privacy • Terms • Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-20">
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow justify-center">{eyebrow}</div>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 text-base text-slate-300 sm:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}

export function CTAButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="primary-btn">
      {label} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
