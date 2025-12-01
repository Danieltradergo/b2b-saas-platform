'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface Company {
  id: string;
  name: string;
  plan: string;
  email: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAdminAndFetchCompanies();
  }, []);

  async function checkAdminAndFetchCompanies() {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
        return;
      }

      // Fetch companies from Supabase
      const { data: companiesData, error: companiesError } = await supabase
        .from('companies')
        .select('*')
        .order('created_at', { ascending: false });

      if (companiesError) throw companiesError;
      setCompanies(companiesData || []);
    } catch (err) {
      console.error('Erro:', err);
      setError('Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="p-8">Carregando...</div>;

  const totalCompanies = companies.length;
  const monthlyRevenue = companies.reduce((sum, c) => {
    const planValue = c.plan === 'Startup' ? 99 : c.plan === 'Professional' ? 299 : 0;
    return sum + planValue;
  }, 0);
  const conversionRate = companies.length > 0 ? ((companies.length / 100) * 100).toFixed(1) : '0';

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Painel Administrativo</h1>
        <p className="text-gray-400">Gerenciamento completo da plataforma</p>
      </div>

      {error && <div className="mb-4 p-4 bg-red-900 text-red-100 rounded">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="text-gray-400 text-sm font-semibold mb-2">TOTAL DE EMPRESAS</div>
          <div className="text-3xl font-bold text-white">{totalCompanies}</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="text-gray-400 text-sm font-semibold mb-2">RECEITA MENSAL</div>
          <div className="text-3xl font-bold text-white">R$ {monthlyRevenue.toLocaleString('pt-BR')}</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="text-gray-400 text-sm font-semibold mb-2">TAXA DE CONVERSÃO</div>
          <div className="text-3xl font-bold text-white">{conversionRate}%</div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Empresas Registradas</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-900">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Empresa</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Plano</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Data</th>
              </tr>
            </thead>
            <tbody>
              {companies.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-400">
                    Nenhuma empresa registrada
                  </td>
                </tr>
              ) : (
                companies.map((company) => (
                  <tr key={company.id} className="border-b border-gray-700 hover:bg-gray-900/50 transition">
                    <td className="px-6 py-4 text-white font-medium">{company.name}</td>
                    <td className="px-6 py-4 text-gray-300">{company.plan}</td>
                    <td className="px-6 py-4 text-gray-300">{company.email}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium">
                        {company.status || 'Ativo'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">
                      {new Date(company.created_at).toLocaleDateString('pt-BR')}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
