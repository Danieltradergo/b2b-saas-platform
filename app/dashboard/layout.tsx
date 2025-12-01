'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          router.push('/login');
          return;
        }
        setUserEmail(user.email || '');
      } catch (err) {
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-800 border-r border-slate-700 p-6 flex flex-col">
          <h1 className="text-2xl font-bold text-white mb-8">Platform</h1>
          <nav className="space-y-4 flex-1">
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded bg-slate-700 text-white hover:bg-slate-600"
            >
              Dashboard
            </Link>
            <Link
              href="/admin"
              className="block px-4 py-2 rounded text-slate-300 hover:bg-slate-700"
            >
              Admin
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 rounded text-slate-300 hover:bg-slate-700"
            >
              Configurações
            </Link>
          </nav>
          <div className="border-t border-slate-700 pt-4">
            <p className="text-sm text-slate-400 mb-4">{userEmail}</p>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <header className="bg-slate-800 border-b border-slate-700 px-8 py-4">
            <h1 className="text-xl font-semibold text-white">B2B SaaS Platform</h1>
          </header>
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
