'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useState } from 'react';

type RecruitmentJob = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  department: string;
  summary: string;
  match: number;
  applicants: number;
  posted: string;
};

export function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</div>
      <div className="mt-3 text-3xl font-black text-white">{value}</div>
      <div className="mt-2 text-sm text-slate-300">{detail}</div>
    </div>
  );
}

export function JobCard({ job, compact = false }: { job: RecruitmentJob; compact?: boolean }) {
  return (
    <article className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-sky-200/80">{job.department}</div>
          <h3 className="mt-2 text-xl font-semibold text-white">{job.title}</h3>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">{job.type}</span>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-slate-300">
        <span>{job.company}</span>
        <span>{job.location}</span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">{job.summary}</p>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="text-lg font-bold text-white">{job.salary}</div>
        <Link href={`/jobs/${job.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-white">
          View details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {!compact && (
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-slate-400">
          <span>{job.posted}</span>
          <span>{job.applicants} applicants</span>
        </div>
      )}
    </article>
  );
}

export function MatchCard({ match = 96 }: { match?: number }) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="flex items-center gap-3 text-sky-300">
        <Sparkles className="h-5 w-5" />
        <span className="text-sm uppercase tracking-[0.22em]">AI Talent Match</span>
      </div>
      <div className="mt-5 flex items-end gap-3">
        <div className="text-5xl font-black text-white">{match}%</div>
        <div className="mb-2 text-sm text-emerald-300">Strong match</div>
      </div>
      <div className="mt-5 h-2.5 rounded-full bg-white/5">
        <div className="h-2.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" style={{ width: `${match}%` }} />
      </div>
    </div>
  );
}

export function DashboardCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="mb-4 text-sm uppercase tracking-[0.2em] text-slate-400">{title}</div>
      {children}
    </div>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        className="rounded-full border border-white/10 p-2 text-slate-200"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-4 right-4 top-20 z-50 rounded-3xl border border-white/10 bg-[#0b1120] p-4 shadow-2xl">
          <nav className="flex flex-col gap-3 text-sm text-slate-200">
            {[
              ['Home', '/'], ['Talent', '/talent'], ['Jobs', '/jobs'], ['Services', '/services'], ['Industries', '/industries'], ['Resources', '/resources'], ['Careers', '/careers'], ['About', '/about'], ['Pricing', '/pricing'], ['Contact', '/contact'],
            ].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setIsOpen(false)} className="rounded-xl border border-white/10 px-3 py-2 hover:bg-white/5">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-4 py-12">
      <div className="glass grid w-full max-w-5xl overflow-hidden rounded-[32px] lg:grid-cols-2">
        <div className="relative hidden overflow-hidden border-r border-white/10 bg-gradient-to-br from-sky-500/15 via-transparent to-violet-500/15 p-10 lg:block">
          <div className="absolute inset-0 grid-pattern opacity-25" />
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 font-black text-2xl text-white">V</div>
              <div className="text-2xl font-bold text-white">VirexaTech</div>
            </div>
            <h1 className="mt-8 text-4xl font-black tracking-[-0.06em] text-white">Hire exceptional talent. Build exceptional companies.</h1>
            <p className="mt-5 max-w-md text-slate-300">A premium recruitment platform for hiring elite technology talent and accelerating business growth.</p>
            <div className="mt-10 space-y-4 text-slate-200">
              {['Verified technology professionals', 'AI-assisted matching', 'Growth strategy for businesses'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-sky-200/80">Platform access</div>
              <h2 className="mt-3 text-3xl font-bold text-white">{title}</h2>
            </div>
            <Link href="/" className="text-sm text-slate-300 hover:text-white">Back home</Link>
          </div>
          <p className="mb-8 text-slate-300">{subtitle}</p>
          {children}
        </div>
      </div>
    </main>
  );
}

export function DashboardShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="section-shell py-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-sky-200/80">VirexaTech dashboard</div>
            <h1 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="secondary-btn">Overview</Link>
            <Link href="/jobs" className="primary-btn">Browse jobs</Link>
          </div>
        </div>
        <p className="mb-8 text-slate-300">{subtitle}</p>
        {children}
      </div>
    </main>
  );
}

export function RoleBadge({ label }: { label: string }) {
  return <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-xs text-sky-200">{label}</span>;
}

export function ApplicationRow({ name, role, status }: { name: string; role: string; status: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div>
        <div className="font-medium text-white">{name}</div>
        <div className="text-sm text-slate-400">{role}</div>
      </div>
      <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300">{status}</span>
    </div>
  );
}

export function AccentStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="flex items-center gap-3 text-sky-300">
        <Sparkles className="h-5 w-5" />
        <span className="text-sm uppercase tracking-[0.2em]">{label}</span>
      </div>
      <div className="mt-5 text-3xl font-black text-white">{value}</div>
    </div>
  );
}
