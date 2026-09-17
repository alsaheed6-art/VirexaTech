export const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export type Job = {
  slug: string;
  company: string;
  title: string;
  location: string;
  salary: string;
  type: string;
  team: string;
  summary: string;
  bullets: string[];
  logo: string;
};

export type AuthUser = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: 'employer' | 'candidate';
};

export type AuthResponse = {
  access_token: string;
  user: AuthUser;
};

export async function loginUser(payload: { email: string; password: string }): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || 'Login failed');
  }

  return res.json();
}

export async function registerUser(payload: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'employer' | 'candidate';
}): Promise<AuthResponse> {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || 'Registration failed');
  }

  return res.json();
}

export function saveAuthSession(response: AuthResponse) {
  localStorage.setItem('virexa_token', response.access_token);
  localStorage.setItem('virexa_user', JSON.stringify(response.user));
}
