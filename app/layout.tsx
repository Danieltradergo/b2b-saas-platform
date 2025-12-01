import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B2B SaaS Platform',
  description: 'Complete B2B SaaS Platform for Brazilian companies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  );
}
