import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader, SiteFooter, SiteNav } from '@/components/site-shell';

const resources = [
  { title: 'Blog', description: 'Insights on hiring, operations, technology leadership, and scaling in modern businesses.' },
  { title: 'Hiring Guides', description: 'Step-by-step playbooks for building technical teams, interviewing, and reducing hiring risk.' },
  { title: 'Salary Insights', description: 'Benchmark compensation and hiring trends across engineers, designers, and product leaders.' },
  { title: 'Business Growth Reports', description: 'Quarterly strategy briefs on AI adoption, cloud migration, digital operating models, and staffing.' },
  { title: 'Cloud & AI Learning Center', description: 'Educational content helping teams understand modern cloud architecture and AI workforce enablement.' },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteNav />
      <PageHeader
        eyebrow="Resources"
        title="Learn the tactics behind stronger hiring and smarter growth."
        description="Explore practical research, strategic thinking, and technical guidance built for leaders building teams and scaling operations."
      />

      <section className="py-20">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resources.map(({ title, description }) => (
              <div key={title} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/40">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-white">
                    Read more <ArrowRight className="h-4 w-4" />
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
