'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowRight, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import { AuthShell } from '@/components/recruitment-platform';
import { loginUser, saveAuthSession } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await loginUser({ email, password });
      saveAuthSession(response);
      router.push(response.user.role === 'employer' ? '/dashboard/employer' : '/dashboard/candidate');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign in');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to manage roles, review candidates, and coordinate hiring across your team."
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">Work email</label>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-sky-300" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
              placeholder="you@company.com"
              required
            />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-slate-400">Password</label>
          <div className="flex items-center gap-3">
            <LockKeyhole className="h-4 w-4 text-sky-300" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-300">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-transparent" />
            Remember me
          </label>
          <Link href="/auth/signup" className="text-sky-300 hover:text-white">Forgot password?</Link>
        </div>

        {error ? (
          <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-3 text-sm text-rose-200">{error}</div>
        ) : null}

        <button type="submit" disabled={isSubmitting} className="primary-btn w-full justify-center disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? 'Signing in...' : 'Sign in'} <ArrowRight className="h-4 w-4" />
        </button>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-3 text-sm text-emerald-200">
          <div className="flex items-center gap-2 font-medium"><ShieldCheck className="h-4 w-4" /> Secure enterprise access</div>
        </div>
      </form>

      <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-300">
        New to VirexaTech? <Link href="/auth/signup" className="text-sky-300 hover:text-white">Create an account</Link>
      </div>
    </AuthShell>
  );
}
