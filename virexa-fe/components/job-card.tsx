type JobCardProps = {
  title: string;
  salary: string;
  type: string;
  location: string;
  team: string;
};

export function JobCard({ title, salary, type, location, team }: JobCardProps) {
  return (
    <article className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-sky-200/80">{team}</div>
          <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">{type}</div>
      </div>

      <div className="mt-6 space-y-2 text-sm text-slate-300">
        <div className="font-semibold text-white">{salary}</div>
        <div>{location}</div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
        <span className="text-slate-400">Remote-first</span>
        <button className="text-sky-300 hover:text-white">Apply now</button>
      </div>
    </article>
  );
}
