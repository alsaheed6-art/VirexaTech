'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowRight, Building2, Sparkles, UserRound } from 'lucide-react';
import { AuthShell } from '@/components/recruitment-platform';
import { registerUser, saveAuthSession } from '@/lib/api';

export default function SignupPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'employer' | 'candidate'>('employer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await registerUser({ firstName, lastName, email, password, role });
      saveAuthSession(response);
      router.push(role === 'employer' ? '/dashboard/employer' : '/dashboard/candidate');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to create account');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Set up your employer or candidate profile and unlock VirexaTech’s hiring intelligence."
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">First name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
              required
            />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">Last name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
            required
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
            required
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">Account type</label>
          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setRole('employer')}
              className={`flex items-center gap-3 rounded-2xl border p-3 text-sm ${role === 'employer' ? 'border-sky-400/20 bg-sky-500/10 text-sky-100' : 'border-white/10 bg-white/5 text-slate-200'}`}
            >
              <Building2 className="h-4 w-4" /> Employer
            </button>
            <button
              type="button"
              onClick={() => setRole('candidate')}
              className={`flex items-center gap-3 rounded-2xl border p-3 text-sm ${role === 'candidate' ? 'border-sky-400/20 bg-sky-500/10 text-sky-100' : 'border-white/10 bg-white/5 text-slate-200'}`}
            >
              <UserRound className="h-4 w-4" /> Candidate
            </button>
          </div>
        </div>

        {error ? (
          <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-3 text-sm text-rose-200">{error}</div>
        ) : null}

        <button type="submit" disabled={isSubmitting} className="primary-btn w-full justify-center disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? 'Creating account...' : 'Create account'} <ArrowRight className="h-4 w-4" />
        </button>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
          <div className="flex items-center gap-2 text-sky-200">
            <Sparkles className="h-4 w-4" /> AI Talent match enabled
          </div>
          <div className="mt-3 text-slate-300">Your account includes role matching, shortlists, and a hiring operations dashboard.</div>
        </div>
      </form>

      <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-300">
        Already have an account? <Link href="/auth/login" className="text-sky-300 hover:text-white">Log in</Link>
      </div>
    </AuthShell>
  );
}
