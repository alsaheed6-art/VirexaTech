import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader, SiteFooter, SiteNav } from '@/components/site-shell';

const industries = [
  { name: 'SaaS', description: 'Scale product teams and platform operations with engineers and leaders built for subscription growth.' },
  { name: 'Fintech', description: 'Support compliance-heavy product and engineering teams with secure, high-quality technical talent.' },
  { name: 'Healthcare', description: 'Match companies with teams who understand HIPAA-sensitive systems, reliability, and data governance.' },
  { name: 'Government', description: 'Source technology talent capable of secure modernization, mission-critical delivery, and compliance.' },
  { name: 'E-commerce', description: 'Scale digital commerce platforms, analytics, and infrastructure with high-velocity execution.' },
  { name: 'Media', description: 'Build digital experiences and audiences with teams who understand content, platforms, and reach.' },
  { name: 'Manufacturing', description: 'Support the operational tech stack across automation, data, IoT, and production systems.' },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteNav />
      <PageHeader
        eyebrow="Industries"
        title="Built for the sectors moving fastest today."
        description="From SaaS to healthcare and government, VirexaTech helps industry leaders hire exceptional talent and operationalize the systems that drive growth."
      />

      <section className="py-20">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map(({ name, description }) => (
              <div key={name} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/40">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300 text-lg font-bold">{name.charAt(0)}</div>
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-white">
                    Explore this industry <ArrowRight className="h-4 w-4" />
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
