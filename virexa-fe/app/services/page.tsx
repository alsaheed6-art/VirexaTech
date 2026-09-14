import Link from 'next/link';
import { ArrowRight, Cloud, Cpu, MonitorSmartphone, TrendingUp, Users, Zap } from 'lucide-react';
import { PageHeader, SiteFooter, SiteNav } from '@/components/site-shell';

const services = [
  { icon: Users, title: 'Tech Recruitment', description: 'Build hiring pipelines for software, product, cloud, AI, and security leaders with precision and speed.' },
  { icon: Cloud, title: 'AWS Cloud Consulting', description: 'Architect custom cloud platforms that improve reliability, performance, and operational efficiency.' },
  { icon: Cpu, title: 'AI Workforce Solutions', description: 'Deploy AI talent, adoption strategy, and capability building across teams and functions.' },
  { icon: MonitorSmartphone, title: 'Digital Transformation', description: 'Modernize legacy systems with a disciplined roadmap that ties technology to business outcomes.' },
  { icon: TrendingUp, title: 'Startup Scaling', description: 'Support early-stage and growth-stage companies through hiring, execution, and technology planning.' },
  { icon: Zap, title: 'Developer Teams on Demand', description: 'Assemble senior delivery teams for fast-moving launches, critical projects, and platform rebuilds.' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteNav />
      <PageHeader
        eyebrow="Business growth services"
        title="Technology strategy, recruiting, and delivery support for modern companies."
        description="VirexaTech helps businesses scale through hiring, digital transformation, cloud strategy, and AI adoption—without losing speed, focus, or product momentum."
      />

      <section className="py-20">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/40">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-white">
                    Talk to an expert <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="eyebrow">Why businesses choose VirexaTech</div>
              <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">A strategic partner for growth, not just recruitment.</h2>
            </div>
            <div className="space-y-4">
              {['Technology understanding across cloud, AI, product, and security', 'Senior-level hiring support that reduces risk and accelerates timing', 'Actionable business strategy informed by technical execution realities', 'Flexible delivery models for enterprise, startup, and portfolio companies'].map((item) => (
                <div key={item} className="glass rounded-2xl p-4 text-slate-200">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
