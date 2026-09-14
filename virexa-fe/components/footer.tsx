export function Footer() {
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
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Find Talent</li>
              <li>Jobs Marketplace</li>
              <li>Business Growth</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Industries</div>
            <ul className="mt-4 space-y-3 text-slate-300">
              {['SaaS', 'Fintech', 'Healthcare', 'Government'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Resources</div>
            <ul className="mt-4 space-y-3 text-slate-300">
              {['Blog', 'Guides', 'Reports', 'Careers'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
