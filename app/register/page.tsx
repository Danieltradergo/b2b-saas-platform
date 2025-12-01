'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [plan, setPlan] = useState('startup');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [agree, setAgree] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      setError('Você precisa concordar com os termos');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      if (data.user) {
        const { error: insertError } = await supabase
          .from('companies')
          .insert([
            {
              user_id: data.user.id,
              name: companyName,
              email: email,
              plan: plan,
              status: 'active',
            },
          ]);

        if (insertError) throw insertError;

        router.push('/dashboard');
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao registrar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Crie sua conta</h1>
          <p className="text-slate-400">Comece sua prova gratuita hoje</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4 bg-slate-800 border border-slate-700 rounded-lg p-8">
          {error && (
            <div className="bg-red-900/20 border border-red-500/50 text-red-200 px-4 py-3 rounded text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Empresa</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded text-white focus:outline-none focus:border-blue-500"
              placeholder="Sua empresa"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded text-white focus:outline-none focus:border-blue-500"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded text-white focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">Plano</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="startup"
                  checked={plan === 'startup'}
                  onChange={(e) => setPlan(e.target.value)}
                  className="mr-2"
                />
                <span className="text-slate-300">Startup - R$99/mês</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="professional"
                  checked={plan === 'professional'}
                  onChange={(e) => setPlan(e.target.value)}
                  className="mr-2"
                />
                <span className="text-slate-300">Professional - R$299/mês</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="enterprise"
                  checked={plan === 'enterprise'}
                  onChange={(e) => setPlan(e.target.value)}
                  className="mr-2"
                />
                <span className="text-slate-300">Enterprise - Personalizado</span>
              </label>
            </div>
          </div>

          <div className="flex items-start">
            <input
              id="agree"
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-900"
            />
            <label htmlFor="agree" className="ml-2 text-sm text-slate-400">
              Concordo com os termos de serviço
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-2 rounded transition-all"
          >
            {loading ? 'Registrando...' : 'Cadastrar'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-400">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
