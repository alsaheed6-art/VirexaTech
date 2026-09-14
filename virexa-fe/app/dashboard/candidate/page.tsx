import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { DashboardShell, StatCard } from '@/components/recruitment-platform';
import { candidateMetrics, jobsData } from '@/components/recruitment-data';

export default function CandidateDashboardPage() {
  return (
    <DashboardShell
      title="Candidate dashboard"
      subtitle="Track your applications, optimize your profile, and discover top-fit opportunities aligned to your skills."
    >
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {candidateMetrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} detail={metric.detail} />
        ))}
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="glass rounded-[30px] p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Recommended roles</div>
              <h2 className="mt-2 text-2xl font-bold text-white">Best fit for your profile</h2>
            </div>
            <Link href="/jobs" className="primary-btn">
              Browse jobs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {jobsData.slice(0, 4).map((job) => (
              <article key={job.slug} className="rounded-3xl border border-white/10 bg-white/[0.02] p-4 transition hover:-translate-y-1 hover:border-sky-400/40">
                <div className="flex items-center justify-between">
                  <div className="text-sm uppercase tracking-[0.18em] text-sky-200/80">{job.department}</div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">{job.match}% match</span>
                </div>
                <div className="mt-3 text-lg font-semibold text-white">{job.title}</div>
                <div className="mt-2 text-sm text-slate-300">{job.company} • {job.location}</div>
                <div className="mt-4 text-base font-bold text-white">{job.salary}</div>
                <div className="mt-4 flex items-center gap-2 text-sm text-sky-300">
                  <Search className="h-4 w-4" /> View role details
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <StatCard label="AI match" value="96%" detail="High confidence shortlist" />
          <StatCard label="Interviews" value="2" detail="Booked this week" />
          <StatCard label="Saved roles" value="12" detail="Top-priority opportunities" />
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-[30px] p-6">
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-slate-400">Profile & resume</div>
          <div className="rounded-3xl border border-dashed border-sky-400/30 bg-sky-500/5 p-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-200">
              <Search className="h-6 w-6" />
            </div>
            <div className="mt-4 text-xl font-semibold text-white">Upload your resume</div>
            <div className="mt-2 text-sm text-slate-300">PDF, DOCX, or TXT up to 10MB</div>
            <button className="primary-btn mt-5 px-5 py-3 text-sm">Select file</button>
          </div>
        </div>

        <div className="glass rounded-[30px] p-6">
          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-slate-400">Profile optimization</div>
          <div className="space-y-4 text-slate-200">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <span>Technical depth</span>
                <span className="font-bold text-white">94%</span>
              </div>
              <div className="mt-3 h-2.5 rounded-full bg-white/5">
                <div className="h-2.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" style={{ width: '94%' }} />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <span>Communication</span>
                <span className="font-bold text-white">89%</span>
              </div>
              <div className="mt-3 h-2.5 rounded-full bg-white/5">
                <div className="h-2.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" style={{ width: '89%' }} />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <span>Leadership readiness</span>
                <span className="font-bold text-white">91%</span>
              </div>
              <div className="mt-3 h-2.5 rounded-full bg-white/5">
                <div className="h-2.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" style={{ width: '91%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}
