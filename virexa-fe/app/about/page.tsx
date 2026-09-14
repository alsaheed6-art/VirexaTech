import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PageHeader, SiteFooter, SiteNav } from '@/components/site-shell';

const values = [
  { title: 'People first', description: 'We believe exceptional businesses are built by exceptional humans, supported by strong systems and thoughtful process.' },
  { title: 'Technology with intent', description: 'We connect product, engineering, and growth strategy to practical execution instead of isolated workstreams.' },
  { title: 'Trust and transparency', description: 'Clear communication, honest guidance, and operational rigor help companies make better decisions.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteNav />
      <PageHeader
        eyebrow="About VirexaTech"
        title="We connect ambitious businesses with exceptional technical talent."
        description="VirexaTech brings together recruiting expertise, cloud and AI advisory, and growth strategy to help companies hire better and scale smarter."
      />

      <section className="py-20">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ title, description }) => (
              <div key={title} className="glass rounded-3xl p-6">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="eyebrow">Mission</div>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Connect businesses with world-class technology professionals and help companies scale through technology.</h2>
            </div>
            <div className="glass rounded-3xl p-6 text-slate-200">
              We operate at the intersection of recruitment, technology strategy, and enterprise growth. Our work helps founders, operators, and leadership teams confidently build the talent and systems needed to move faster in competitive markets.
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-white">
                  Build with VirexaTech <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
