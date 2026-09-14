import Link from 'next/link';
import { ArrowRight, Briefcase, Check, MapPin, SlidersHorizontal } from 'lucide-react';
import { PageHeader, SiteFooter, SiteNav } from '@/components/site-shell';
import { API_BASE, type Job } from '@/lib/api';

const filters = ['Remote', 'Hybrid', 'On-site'];

const fallbackJobs: Job[] = [
  { slug: 'senior-platform-engineer', company: 'Northstar Health', title: 'Senior Platform Engineer', location: 'Remote', salary: '$150,000–$210,000', type: 'Full-time', team: 'Platform', summary: 'Build and scale the core platform engineering systems that support high-availability healthcare products.', bullets: [], logo: 'N' },
  { slug: 'cloud-infrastructure-lead', company: 'SummitGrid', title: 'Cloud Infrastructure Lead', location: 'Hybrid • Austin, TX', salary: '$140,000–$195,000', type: 'Full-time', team: 'Cloud', summary: 'Lead migration and modernization programs for internal and customer-facing systems.', bullets: [], logo: 'S' },
  { slug: 'ai-systems-engineer', company: 'Aegis Labs', title: 'AI Systems Engineer', location: 'Remote', salary: '$165,000–$230,000', type: 'Full-time', team: 'AI', summary: 'Design deployment and orchestration systems for production AI workflows.', bullets: [], logo: 'A' },
];

async function getJobs(): Promise<Job[]> {
  try {
    const res = await fetch(`${API_BASE}/jobs`, { cache: 'no-store' });
    if (!res.ok) {
      return fallbackJobs;
    }
    return res.json();
  } catch {
    return fallbackJobs;
  }
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteNav />
      <PageHeader
        eyebrow="Jobs marketplace"
        title="Find roles built for high-growth technology teams."
        description="Browse premium openings with realistic compensation ranges, flexible work arrangements, and VirexaTech-vetted opportunities across engineering, AI, cloud, and product."
      />

      <section className="py-12">
        <div className="section-shell">
          <div className="glass mb-8 rounded-3xl p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  <SlidersHorizontal className="h-4 w-4 text-sky-300" />
                  Filters
                </div>
                {filters.map((filter) => (
                  <button key={filter} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400/40 hover:text-white">
                    {filter}
                  </button>
                ))}
              </div>
              <div className="text-sm text-slate-300">{jobs.length} open roles • Salary ranges shown in USD</div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job) => (
              <article key={job.slug} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/40">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/25 to-violet-500/20 font-bold text-white">{job.logo}</div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">{job.company}</div>
                      <div className="mt-1 text-lg font-semibold text-white">{job.title}</div>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">{job.type}</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-xs text-sky-200">{job.team}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">{job.location}</span>
                </div>

                <div className="mt-6 space-y-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-sky-300" /> <span>{job.company}</span></div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-300" /> <span>{job.location}</span></div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="text-xl font-bold text-white">{job.salary}</div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-400">Live data from NestJS API</span>
                    <Link href={`/jobs/${job.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-white">
                      View role <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="eyebrow">Why companies hire through VirexaTech</div>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Faster hiring. Better matches. More reliable execution.</h2>
            </div>
            <div className="space-y-4">
              {['Verified technical screening', 'Transparent compensation guidance', 'Remote-ready hiring workflows', 'Strategic advisory from talent experts'].map((item) => (
                <div key={item} className="glass flex items-center gap-3 rounded-2xl p-4 text-slate-200">
                  <Check className="h-5 w-5 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
