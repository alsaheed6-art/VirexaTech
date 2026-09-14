import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Cloud,
  Cpu,
  Globe,
  LineChart,
  Menu,
  MonitorSmartphone,
  Network,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

const metrics = [
  { value: '25,000+', label: 'professionals in network' },
  { value: '3,500+', label: 'companies supported' },
  { value: '98%', label: 'client satisfaction' },
  { value: '42', label: 'countries served' },
];

const trustedCompanies = ['Northstar', 'Aegis Labs', 'LaunchPeak', 'SummitGrid', 'VerveOps', 'Crestline'];

const services = [
  { icon: Users, title: 'Tech Recruitment', description: 'Source and place vetted engineering, AI, and product leaders with speed and precision.' },
  { icon: BriefcaseBusiness, title: 'Executive Hiring', description: 'Build board-ready leadership teams for product, engineering, and growth functions.' },
  { icon: Cloud, title: 'AWS Cloud Consulting', description: 'Architect resilient cloud platforms for scale, security, and operational efficiency.' },
  { icon: Cpu, title: 'AI Workforce Solutions', description: 'Deploy AI talent and internal enablement programs that move ideas into production.' },
  { icon: MonitorSmartphone, title: 'Digital Transformation', description: 'Turn legacy complexity into measurable modernization roadmaps and execution plans.' },
  { icon: TrendingUp, title: 'Startup Scaling', description: 'Support founders with on-demand product, data, and engineering leadership.' },
  { icon: Zap, title: 'Developer Teams on Demand', description: 'Assemble senior-level teams to launch, iterate, and ship faster in critical moments.' },
];

const talentCategories = ['Software Engineering', 'Cloud Engineering', 'AI & Machine Learning', 'Cybersecurity', 'Product Design', 'DevOps', 'Data Engineering', 'Technical Sales'];

const talentProfiles = [
  { name: 'Amelia Patel', specialty: 'Senior Full-Stack Engineer', rate: '$120/hr', location: 'Austin, TX', availability: 'Available in 2 weeks', experience: '8 years', skills: ['React', 'Node.js', 'AWS'] },
  { name: 'Marcus Nguyen', specialty: 'ML Platform Engineer', rate: '$150/hr', location: 'Seattle, WA', availability: 'Available now', experience: '9 years', skills: ['Python', 'MLOps', 'Kubernetes'] },
  { name: 'Sofia Ramirez', specialty: 'Cloud Security Lead', rate: '$140/hr', location: 'Denver, CO', availability: 'Available in 1 week', experience: '10 years', skills: ['AWS', 'Zero Trust', 'Terraform'] },
  { name: 'Noah Brooks', specialty: 'Product Designer', rate: '$95/hr', location: 'New York, NY', availability: 'Available now', experience: '7 years', skills: ['Figma', 'UX Strategy', 'Design Systems'] },
  { name: 'Ivy Chen', specialty: 'Data Engineer', rate: '$130/hr', location: 'San Francisco, CA', availability: 'Available in 3 weeks', experience: '8 years', skills: ['Spark', 'dbt', 'Airflow'] },
  { name: 'Javier Torres', specialty: 'DevOps Architect', rate: '$125/hr', location: 'Miami, FL', availability: 'Available now', experience: '11 years', skills: ['Kubernetes', 'GitHub Actions', 'Terraform'] },
];

const jobs = [
  { title: 'Software Engineer', salary: '$95,000–$165,000/year', type: 'Full-time', location: 'Remote / Hybrid', team: 'Platform' },
  { title: 'Cloud Engineer', salary: '$105,000–$175,000/year', type: 'Full-time', location: 'Hybrid', team: 'Infrastructure' },
  { title: 'AI Engineer', salary: '$120,000–$220,000/year', type: 'Full-time', location: 'Remote', team: 'AI Systems' },
  { title: 'Cybersecurity Engineer', salary: '$110,000–$190,000/year', type: 'Full-time', location: 'Onsite', team: 'Security' },
  { title: 'DevOps Engineer', salary: '$100,000–$180,000/year', type: 'Full-time', location: 'Remote', team: 'Operations' },
  { title: 'Product Designer', salary: '$90,000–$160,000/year', type: 'Hybrid', location: 'Hybrid', team: 'Design' },
  { title: 'Junior Developer', salary: 'From $25/hour', type: 'Contract', location: 'Remote', team: 'Product' },
  { title: 'Cloud Consultant', salary: 'From $75/hour', type: 'Contract', location: 'Remote / Hybrid', team: 'Advisory' },
  { title: 'AI Specialist', salary: 'From $90/hour', type: 'Consulting', location: 'Remote', team: 'AI Lab' },
];

const industries = ['SaaS', 'Fintech', 'Healthcare', 'Government', 'E-commerce', 'Media', 'Manufacturing'];
const resources = ['Blog', 'Hiring Guides', 'Salary Insights', 'Business Growth Reports', 'Cloud & AI Learning Center'];
const careers = ['Engineering', 'Cloud', 'AI', 'Security', 'Sales', 'Marketing', 'Operations'];
const testimonials = [
  { quote: 'VirexaTech connected us with senior engineers who understood our enterprise environment from day one.', name: 'Alicia Morgan', title: 'VP Engineering, Northstar Health' },
  { quote: 'Their blend of recruiting rigor and growth advisory helped us scale from a seed-stage team to a global platform.', name: 'Daniel Wu', title: 'Founder, SummitGrid' },
  { quote: 'The recruitment process felt premium and thoughtful—top tier talent, thoughtful communication, and measurable outcomes.', name: 'Priya Shah', title: 'COO, Aegis Labs' },
];
const stats = [
  { label: 'Time to hire', value: '12 days' },
  { label: 'Avg. retention', value: '94%' },
  { label: 'Pipeline coverage', value: '4.8x' },
  { label: 'Hiring satisfaction', value: '4.9/5' },
];

const inspire = ['Palantir Technologies', 'Anduril Industries', 'Scale AI', 'Fastly', 'Databricks', 'C3 AI', 'AppLovin', 'Snowflake'];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 font-black text-xl text-white shadow-glow">V</div>
          <div className="text-lg font-semibold tracking-tight">VirexaTech</div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
          {[
            { label: 'Home', href: '/' },
            { label: 'Talent', href: '/talent' },
            { label: 'Jobs', href: '/jobs' },
            { label: 'Services', href: '/services' },
            { label: 'Industries', href: '/industries' },
            { label: 'Resources', href: '/resources' },
            { label: 'Careers', href: '/careers' },
            { label: 'About', href: '/about' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">{item.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="secondary-btn">Talk to sales</Link>
          <Link href="/jobs" className="primary-btn">Hire Talent</Link>
        </div>

        <button className="rounded-full border border-white/10 p-2 text-slate-200 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-mesh opacity-90" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="section-shell relative py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="eyebrow mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Global talent infrastructure
            </div>
            <h1 className="max-w-2xl text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              Hire exceptional talent.
              <span className="block bg-gradient-to-r from-sky-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Build exceptional companies.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
              VirexaTech connects ambitious businesses with world-class technology professionals and helps companies scale through cloud, AI, cybersecurity, software engineering, and digital transformation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="primary-btn">
                Hire Talent <ArrowRight className="h-4 w-4" />
              </button>
              <button className="secondary-btn">
                Find Jobs <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.value} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xl font-bold text-white">{metric.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex h-[520px] items-center justify-center">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-sky-500/20 via-transparent to-violet-500/20 blur-2xl" />
            <div className="glass relative h-[440px] w-full max-w-[500px] overflow-hidden rounded-[32px] p-5">
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-slate-200/10 bg-slate-900/60 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-sky-100">
                <div className="h-2 w-2 rounded-full bg-emerald-400" /> Network live
              </div>
              <div className="relative h-full w-full rounded-[24px] border border-white/10 bg-[#0a1120]/80">
                <div className="network-orbit left-10 right-10 top-14 h-56" />
                <div className="network-orbit left-16 right-16 top-20 h-44" />
                <div className="network-orbit left-24 right-24 top-28 h-32" />
                <div className="network-dot left-[30%] top-[28%]" />
                <div className="network-dot left-[52%] top-[37%]" />
                <div className="network-dot left-[62%] top-[54%]" />
                <div className="network-dot left-[45%] top-[68%]" />
                <div className="network-dot left-[68%] top-[26%]" />
                <div className="network-dot left-[24%] top-[56%]" />
                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/30 bg-sky-500/10 shadow-[0_0_30px_rgba(94,165,255,0.5)]" />
                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-600 font-black text-2xl text-white shadow-glow">V</div>

                <div className="absolute left-4 top-24 rounded-2xl border border-white/10 bg-slate-900/80 p-3 shadow-xl">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Recruiting</div>
                  <div className="mt-2 text-xl font-bold text-white">319</div>
                  <div className="text-xs text-emerald-300">+24% QoQ</div>
                </div>

                <div className="absolute bottom-5 right-5 w-52 rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-xl">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                    <span>Growth</span>
                    <span className="text-emerald-300">+41%</span>
                  </div>
                  <div className="mt-4 flex h-20 items-end gap-2">
                    {[34, 54, 46, 70, 58, 88].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-sky-500 via-blue-500 to-violet-500" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="border-b border-white/10 py-14">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow justify-center">Trusted by high-growth teams</div>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Built for enterprise hiring and modern business growth.</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { value: '10,000+', label: 'vetted professionals' },
            { value: '500+', label: 'companies supported' },
            { value: '98%', label: 'client satisfaction' },
          ].map((item) => (
            <div key={item.label} className="glass rounded-3xl p-6 text-center fade-up">
              <div className="text-4xl font-black text-white">{item.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustedCompanies.map((company) => (
            <div key={company} className="glass rounded-2xl px-4 py-4 text-center text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-sky-400/40">{company}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyVirexaTech() {
  const reasons = [
    { icon: BadgeCheck, title: 'Verified talent', text: 'Every candidate is screened and assessed for technical depth and business readiness.' },
    { icon: Globe, title: 'Global reach', text: 'Access specialized professionals across 42 countries with local market understanding.' },
    { icon: Network, title: 'Network effects', text: 'Our advisory and recruiting teams align hiring and growth strategy with execution.' },
    { icon: LineChart, title: 'Growth insight', text: 'Go beyond staffing with strategic advisory, pricing guidance, and delivery architecture.' },
  ];

  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">Why VirexaTech</div>
          <h2 className="mt-6 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Built for companies that need more than hiring support.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass rounded-3xl p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedServices() {
  return (
    <section className="bg-white/[0.02] py-20">
      <div className="section-shell">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Featured services</div>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Growth services built for ambitious teams.</h2>
          </div>
          <button className="hidden secondary-btn lg:inline-flex">Explore all services</button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="glass group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/40">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition group-hover:text-white">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TalentSection() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="eyebrow">Find talent</div>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Browse verified experts across core technical disciplines.</h2>
          </div>
          <button className="secondary-btn">View all profiles</button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {talentCategories.map((category) => (
            <button key={category} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400/40 hover:text-white">{category}</button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {talentProfiles.map((profile) => (
            <article key={profile.name} className="glass rounded-3xl p-5 transition hover:-translate-y-1 hover:border-sky-400/40">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/25 to-violet-500/20 text-xl font-bold text-white">{profile.name.slice(0, 1)}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{profile.name}</h3>
                  <p className="text-sm text-slate-300">{profile.specialty}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-2 text-sm text-slate-300">
                <div>Experience: <span className="font-medium text-white">{profile.experience}</span></div>
                <div>Location: <span className="font-medium text-white">{profile.location}</span></div>
                <div>Availability: <span className="font-medium text-white">{profile.availability}</span></div>
                <div>Rate: <span className="font-medium text-white">{profile.rate}</span></div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-xs text-sky-200">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JobMarketplace() {
  return (
    <section className="bg-white/[0.02] py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">Jobs marketplace</div>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Explore roles with realistic U.S. salary ranges and flexible work models.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <article key={job.title} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/40">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-sky-200/80">{job.team}</div>
                  <h3 className="mt-2 text-xl font-semibold text-white">{job.title}</h3>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">{job.type}</div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-slate-300">
                <div className="font-semibold text-white">{job.salary}</div>
                <div>{job.location}</div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                <span className="text-slate-400">Remote-first</span>
                <button className="text-sky-300 hover:text-white">Apply now</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthMetrics() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">Business growth metrics</div>
            <h2 className="mt-6 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">The platform behind faster team building and stronger execution.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-4">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[30px] p-5 shadow-glow">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Client dashboard</div>
                <div className="mt-2 text-2xl font-bold text-white">Growth pipeline</div>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">+26.8%</div>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-400">Active roles</div><div className="mt-3 text-3xl font-bold text-white">62</div></div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-400">Shortlisted</div><div className="mt-3 text-3xl font-bold text-white">188</div></div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"><div className="text-xs uppercase tracking-[0.2em] text-slate-400">Conversion</div><div className="mt-3 text-3xl font-bold text-white">74%</div></div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400"><span>Team velocity</span><span>Q3</span></div>
              <div className="flex h-40 items-end gap-3">
                {[30, 45, 60, 55, 70, 82, 94].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-sky-500 via-blue-500 to-violet-500" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustrySection() {
  return (
    <section className="bg-white/[0.02] py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">Industries</div>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Specialized support for modern digital businesses.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="glass rounded-3xl p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300">{industry.slice(0,1)}</div>
              <h3 className="text-xl font-semibold text-white">{industry}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Growth strategy, recruiting, and technical execution tailored to the speed, compliance, and operational demands of {industry} teams.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">Resources</div>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Insights for hiring, planning, and scaling in a technical market.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource} className="glass rounded-3xl p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-300"><ArrowRight className="h-5 w-5" /></div>
              <h3 className="text-xl font-semibold text-white">{resource}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Actionable playbooks and premium content designed for teams hiring, scaling, and modernizing.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section className="bg-white/[0.02] py-20">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="eyebrow">Careers at VirexaTech</div>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Work alongside product, cloud, AI, and security leaders building the future.</h2>
            <p className="mt-5 text-base text-slate-300">Our teams operate across engineering, revenue, operations, and strategic growth. VirexaTech is built for exceptional people who want to work at the intersection of human capital and modern technology.</p>
            <ul className="mt-6 space-y-3 text-slate-200">
              {['Competitive compensation', 'Remote flexibility', 'Health and wellbeing', 'Learning budget and mentorship'].map((item) => (
                <li key={item} className="flex items-center gap-3"><Check className="h-4 w-4 text-emerald-300" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {careers.map((role) => (
              <div key={role} className="glass rounded-3xl p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Department</div>
                <div className="mt-3 text-xl font-semibold text-white">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">Customer testimonials</div>
          <h2 className="mt-6 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Teams choose VirexaTech to move faster and hire with confidence.</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="glass rounded-3xl p-6">
              <div className="mb-5 flex gap-1 text-yellow-400">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
              <p className="text-lg leading-8 text-slate-100">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-slate-400">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InspirationSection() {
  return (
    <section className="bg-white/[0.02] py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow justify-center">Reference inspiration</div>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-white sm:text-5xl">Examples of notable American technology companies referenced in market insight articles and learning content.</h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {inspire.map((company) => (
            <span key={company} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{company}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 font-black text-xl text-white">V</div>
              <div className="text-xl font-semibold text-white">VirexaTech</div>
            </div>
            <p className="mt-5 max-w-sm text-slate-300">Hire exceptional talent. Build exceptional companies.</p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Platform</div>
            <ul className="mt-4 space-y-3 text-slate-300"><li>Find Talent</li><li>Jobs Marketplace</li><li>Business Growth</li></ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Industries</div>
            <ul className="mt-4 space-y-3 text-slate-300">{['SaaS', 'Fintech', 'Healthcare', 'Government'].map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Resources</div>
            <ul className="mt-4 space-y-3 text-slate-300">{['Blog', 'Guides', 'Reports', 'Careers'].map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 VirexaTech. Demo content only.</div>
          <div>Privacy • Terms • Security</div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <WhyVirexaTech />
      <FeaturedServices />
      <TalentSection />
      <JobMarketplace />
      <GrowthMetrics />
      <IndustrySection />
      <ResourcesSection />
      <CareersSection />
      <Testimonials />
      <InspirationSection />
      <Footer />
    </main>
  );
}
