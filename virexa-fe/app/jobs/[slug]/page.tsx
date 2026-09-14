import Link from 'next/link';
import { ArrowLeft, ArrowRight, Building2, Check, Clock3, MapPin, Sparkles } from 'lucide-react';
import { API_BASE, type Job } from '@/lib/api';

const fallbackJob: Job = {
  slug: 'senior-platform-engineer',
  company: 'Northstar Health',
  title: 'Senior Platform Engineer',
  location: 'Remote • United States',
  type: 'Full-time',
  salary: '$150,000–$210,000',
  team: 'Platform',
  summary: 'Build and scale the core platform engineering systems that support high-availability healthcare products and data workflows.',
  bullets: [
    'Own the architecture and reliability of platform services powering patient and provider experiences.',
    'Drive CI/CD, observability, and cloud infrastructure improvements across AWS and Kubernetes.',
    'Partner with product and data teams to ship resilient features at scale.',
  ],
  logo: 'N',
};

async function getJobBySlug(slug: string): Promise<Job> {
  try {
    const res = await fetch(`${API_BASE}/jobs/${slug}`, { cache: 'no-store' });
    if (!res.ok) {
      return fallbackJob;
    }
    const job = await res.json();
    return job ?? fallbackJob;
  } catch {
    return fallbackJob;
  }
}

export default async function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = await getJobBySlug(params.slug);

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="section-shell py-8">
        <Link href="/jobs" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to jobs
        </Link>

        <section className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-[32px] p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-sky-200">{job.team}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-200">{job.type}</span>
            </div>

            <h1 className="mt-5 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">{job.title}</h1>

            <div className="mt-6 flex flex-wrap gap-6 text-slate-300">
              <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-sky-300" /> {job.company}</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-300" /> {job.location}</div>
              <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-sky-300" /> {job.type}</div>
            </div>

            <div className="mt-8 text-2xl font-bold text-white">{job.salary}</div>

            <p className="mt-6 text-base leading-8 text-slate-300">{job.summary}</p>

            <div className="mt-8">
              <div className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">Role responsibilities</div>
              <ul className="space-y-3 text-slate-200">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass rounded-[30px] p-6">
              <div className="flex items-center gap-3 text-sky-300">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.22em]">AI match</span>
              </div>
              <div className="mt-5 text-5xl font-black text-white">96%</div>
              <div className="mt-3 text-sm text-slate-300">Strong alignment with your skills, experience, and target role profile.</div>
              <div className="mt-5 h-2.5 rounded-full bg-white/5">
                <div className="h-2.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" style={{ width: '96%' }} />
              </div>
            </div>

            <div className="glass rounded-[30px] p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Quick facts</div>
              <div className="mt-5 space-y-4 text-sm text-slate-200">
                <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Work style</span><span className="font-medium text-white">Remote-first</span></div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3"><span>Hiring window</span><span className="font-medium text-white">2 weeks</span></div>
                <div className="flex items-center justify-between"><span>Applicants</span><span className="font-medium text-white">48</span></div>
              </div>
            </div>

            <Link href="/auth/signup" className="primary-btn w-full justify-center">
              Apply now <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </section>
      </div>
    </main>
  );
}
