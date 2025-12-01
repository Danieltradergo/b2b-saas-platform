'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState('Minha Empresa');
  const [email, setEmail] = useState('admin@example.com');

  const handleSave = () => {
    alert('Configurações salvas com sucesso!');
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-8">Configurações</h1>
      <div className="bg-slate-700 rounded-lg p-8 max-w-2xl">
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Nome da Empresa</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium"
          >
            Salvar
          </button>
          <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-medium">
            Alterar Senha
          </button>
        </div>
      </div>
    </div>
  );
}
