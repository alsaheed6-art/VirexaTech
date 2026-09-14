import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { PageHeader, SiteFooter, SiteNav } from '@/components/site-shell';

const departments = ['Engineering', 'Cloud', 'AI', 'Security', 'Sales', 'Marketing', 'Operations'];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteNav />
      <PageHeader
        eyebrow="Careers at VirexaTech"
        title="Join a global team building the future of hiring and growth tech."
        description="We hire people who thrive in complexity, love solving meaningful problems, and want to help businesses scale through technology."
      />

      <section className="py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="eyebrow">Benefits & culture</div>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">High standards, thoughtful support, and meaningful work.</h2>
              <ul className="mt-6 space-y-4 text-slate-200">
                {['Competitive compensation and equity opportunities', 'Flexible remote and hybrid working policy', 'Wellbeing and learning support', 'Clear growth paths and mentorship'].map((item) => (
                  <li key={item} className="flex items-center gap-3"><Check className="h-5 w-5 text-emerald-300" /> {item}</li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {departments.map((department) => (
                <div key={department} className="glass rounded-3xl p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Department</div>
                  <div className="mt-3 text-xl font-semibold text-white">{department}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">Hiring process</div>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Simple, thoughtful, and designed to assess real capability.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {['Screening call', 'Technical review', 'Final panel'].map((step, index) => (
                <div key={step} className="glass rounded-3xl p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-sky-200/80">Step {index + 1}</div>
                  <div className="mt-3 text-xl font-semibold text-white">{step}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/contact" className="primary-btn">
                Apply now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
