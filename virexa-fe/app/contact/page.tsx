import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { PageHeader, SiteFooter, SiteNav } from '@/components/site-shell';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteNav />
      <PageHeader
        eyebrow="Contact"
        title="Talk to a VirexaTech specialist."
        description="Whether you need to hire top technical talent or plan a growth initiative across AI, cloud, and engineering, we’re ready to help."
      />

      <section className="py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3 text-sky-300"><Mail className="h-5 w-5" /> <span>hello@virexatech.com</span></div>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3 text-sky-300"><Phone className="h-5 w-5" /> <span>+1 (415) 555-0147</span></div>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3 text-sky-300"><MapPin className="h-5 w-5" /> <span>San Francisco, CA</span></div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Full name</label>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Company</label>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Company name" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="name@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm text-slate-300">How can we help?</label>
                <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Tell us about your hiring or growth goals." />
              </div>
            </div>
            <div className="mt-6">
              <Link href="/" className="primary-btn">
                Send inquiry <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
