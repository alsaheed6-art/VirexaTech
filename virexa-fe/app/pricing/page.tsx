import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { PageHeader, SiteFooter, SiteNav } from '@/components/site-shell';

const plans = [
  {
    name: 'Launch',
    price: '$1,500',
    description: 'For early-stage teams hiring their first technical leaders.',
    features: ['2 role briefs', 'Talent shortlist', 'Hiring advisor support'],
    featured: false,
  },
  {
    name: 'Scale',
    price: '$4,500',
    description: 'For companies hiring across multiple engineering and product functions.',
    features: ['Unlimited role support', 'Market mapping', 'Executive search guidance'],
    featured: true,
  },
  {
    name: 'Transform',
    price: 'Custom',
    description: 'For enterprise teams with platform, AI, and strategic transformation initiatives.',
    features: ['Dedicated partner team', 'Growth advisory', 'Delivery strategy support'],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteNav />
      <PageHeader
        eyebrow="Pricing"
        title="Flexible engagement models for hiring and growth."
        description="Choose a package aligned to your team stage, hiring goals, and strategic roadmap. Demo pricing shown for planning purposes only."
      />

      <section className="py-20">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map(({ name, price, description, features, featured }) => (
              <div key={name} className={`rounded-3xl p-6 ${featured ? 'border border-sky-400/40 bg-gradient-to-b from-sky-500/10 to-transparent shadow-glow' : 'glass'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{name}</h3>
                  {featured && <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-sky-200">Popular</span>}
                </div>
                <div className="mt-6 text-4xl font-black text-white">{price}<span className="text-base font-medium text-slate-400">/month</span></div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
                <ul className="mt-6 space-y-3 text-slate-200">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3"><Check className="h-5 w-5 text-emerald-300" /> {feature}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="primary-btn">
                    Get started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
