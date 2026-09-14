import { ArrowRight, Check, MapPin, Search, Star } from 'lucide-react';
import Link from 'next/link';
import { PageHeader, SiteFooter, SiteNav } from '@/components/site-shell';

const categories = ['Software Engineering', 'Cloud Engineering', 'AI & Machine Learning', 'Cybersecurity', 'Product Design', 'DevOps', 'Data Engineering', 'Technical Sales'];

const profiles = [
  { name: 'Amelia Patel', role: 'Senior Full-Stack Engineer', skills: ['React', 'Node.js', 'AWS'], location: 'Austin, TX', rate: '$120/hr', experience: '8 years', availability: 'Available in 2 weeks' },
  { name: 'Marcus Nguyen', role: 'ML Platform Engineer', skills: ['Python', 'MLOps', 'Kubernetes'], location: 'Seattle, WA', rate: '$150/hr', experience: '9 years', availability: 'Available now' },
  { name: 'Sofia Ramirez', role: 'Cloud Security Lead', skills: ['AWS', 'Zero Trust', 'Terraform'], location: 'Denver, CO', rate: '$140/hr', experience: '10 years', availability: 'Available in 1 week' },
  { name: 'Noah Brooks', role: 'Product Designer', skills: ['Figma', 'UX Strategy', 'Design Systems'], location: 'New York, NY', rate: '$95/hr', experience: '7 years', availability: 'Available now' },
  { name: 'Ivy Chen', role: 'Data Engineer', skills: ['Spark', 'dbt', 'Airflow'], location: 'San Francisco, CA', rate: '$130/hr', experience: '8 years', availability: 'Available in 3 weeks' },
  { name: 'Javier Torres', role: 'DevOps Architect', skills: ['Kubernetes', 'GitHub Actions', 'Terraform'], location: 'Miami, FL', rate: '$125/hr', experience: '11 years', availability: 'Available now' },
];

export default function TalentPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteNav />
      <PageHeader
        eyebrow="Find talent"
        title="Hire proven experts across engineering, AI, cloud, and product."
        description="Access a curated network of senior technology professionals with skills aligned to your roadmap, hiring plan, and platform priorities."
      />

      <section className="py-12">
        <div className="section-shell">
          <div className="glass rounded-3xl p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                <Search className="h-4 w-4 text-sky-300" />
                <input aria-label="Search talent" placeholder="Search skills, roles, or expertise" className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {['Remote', 'Hybrid', 'On-site', 'Senior', 'Contract'].map((pill) => (
                  <button key={pill} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">{pill}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button key={category} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400/40 hover:text-white">
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {profiles.map((profile) => (
              <article key={profile.name} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/40">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/25 to-violet-500/20 text-xl font-bold text-white">{profile.name.charAt(0)}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
                    <p className="text-sm text-slate-300">{profile.role}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-300" /> {profile.location}</div>
                  <div>Experience: <span className="font-medium text-white">{profile.experience}</span></div>
                  <div>Availability: <span className="font-medium text-white">{profile.availability}</span></div>
                  <div>Rate: <span className="font-medium text-white">{profile.rate}</span></div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-xs text-sky-200">{skill}</span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-1 text-yellow-400"><Star className="h-4 w-4 fill-current" /> <span className="text-sm text-slate-200">4.9</span></div>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-white">
                    Book intro <ArrowRight className="h-4 w-4" />
                  </Link>
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
              <div className="eyebrow">Verification standards</div>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Every expert is vetted for technical depth and business readiness.</h2>
            </div>
            <div className="space-y-4">
              {['Hands-on technical review', 'Communication and leadership assessment', 'Reference and project validation', 'Flexible engagement support'].map((item) => (
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
