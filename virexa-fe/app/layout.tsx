import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VirexaTech | Hire exceptional talent. Build exceptional companies.',
  description:
    'VirexaTech helps businesses hire verified technology talent and grow through cloud, AI, cybersecurity, software engineering, and digital transformation services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#050816] text-white antialiased">{children}</body>
    </html>
  );
}
