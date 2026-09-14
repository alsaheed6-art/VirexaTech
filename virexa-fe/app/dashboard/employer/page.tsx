import Link from 'next/link';
import { ArrowRight, Bell, BriefcaseBusiness, CheckCircle2, Clock3, Download, Filter, Search, Sparkles, TrendingUp, Users } from 'lucide-react';
import {
  ApplicationRow,
  DashboardShell,
  MatchCard,
  RoleBadge,
  StatCard,
} from '@/components/recruitment-platform';
import { jobsData, metricsList } from '@/components/recruitment-data';

export default function EmployerDashboardPage() {
  const featuredJobs = jobsData.slice(0, 3);

  return (
    <DashboardShell
      title="Employer dashboard"
      subtitle="Track active roles, hiring velocity, and high-fit talent across your critical hiring pipelines."
    >
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metricsList.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} detail={metric.detail} />
        ))}
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="glass rounded-[30px] p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Hiring pipeline</div>
              <h2 className="mt-2 text-2xl font-bold text-white">Your active roles</h2>
            </div>
            <button className="secondary-btn">
              <Filter className="h-4 w-4" /> Filters
            </button>
          </div>

          <div className="space-y-4">
            {featuredJobs.map((job) => (
              <div key={job.slug} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:-translate-y-0.5 hover:border-sky-400/40">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-sky-200/80">{job.department}</div>
                    <div className="mt-2 text-lg font-semibold text-white">{job.title}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <RoleBadge label={job.type} />
                    <RoleBadge label={job.location} />
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
                  <span>{job.company}</span>
                  <span>{job.salary}</span>
                  <span>{job.posted}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <MatchCard match={96} />
          <div className="glass rounded-3xl p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm uppercase tracking-[0.22em] text-slate-400">Tasks</div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">On track</span>
            </div>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Candidate shortlist ready</div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"><Clock3 className="h-4 w-4 text-sky-300" /> Interview panel scheduled</div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"><Bell className="h-4 w-4 text-violet-300" /> Offer review due Friday</div>
            </div>
          </div>
          <div className="glass rounded-3xl p-5">
            <div className="text-sm uppercase tracking-[0.22em] text-slate-400">Quarterly overview</div>
            <div className="mt-5 flex items-end justify-between gap-3">
              {[36, 48, 52, 64, 80, 88].map((height, index) => (
                <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-sky-500 via-blue-500 to-violet-500" style={{ height: `${height}px` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-[30px] p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Top talent</div>
              <h2 className="mt-2 text-2xl font-bold text-white">AI shortlisted candidates</h2>
            </div>
            <Link href="/talent" className="primary-btn">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Leah Kim', role: 'Senior Platform Engineer', status: 'Interview scheduled' },
              { name: 'Marcus Silva', role: 'Cloud Security Lead', status: 'Portfolio reviewed' },
              { name: 'Sana Rahman', role: 'ML Infrastructure Engineer', status: 'Highly matched' },
            ].map((candidate) => (
              <ApplicationRow key={candidate.name} name={candidate.name} role={candidate.role} status={candidate.status} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <StatCard label="Pipeline health" value="87%" detail="Strong conversion trend" />
          <StatCard label="Interviews booked" value="23" detail="Across 4 critical roles" />
          <StatCard label="AI score avg" value="94%" detail="Candidate quality improving" />
        </div>
      </section>
    </DashboardShell>
  );
}
