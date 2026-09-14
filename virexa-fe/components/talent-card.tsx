type TalentCardProps = {
  name: string;
  specialty: string;
  rate: string;
  location: string;
  availability: string;
  experience: string;
  skills: string[];
};

export function TalentCard({ name, specialty, rate, location, availability, experience, skills }: TalentCardProps) {
  return (
    <article className="glass rounded-3xl p-5 transition hover:-translate-y-1 hover:border-sky-400/40">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/25 to-violet-500/20 text-xl font-bold text-white">{name.slice(0, 1)}</div>
        <div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm text-slate-300">{specialty}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-2 text-sm text-slate-300">
        <div>Experience: <span className="font-medium text-white">{experience}</span></div>
        <div>Location: <span className="font-medium text-white">{location}</span></div>
        <div>Availability: <span className="font-medium text-white">{availability}</span></div>
        <div>Rate: <span className="font-medium text-white">{rate}</span></div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-xs text-sky-200">{skill}</span>
        ))}
      </div>
    </article>
  );
}
