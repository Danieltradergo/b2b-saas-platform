import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">B2B SaaS Platform</h1>
          <div className="space-x-4">
            <a href="/auth" className="text-gray-700 hover:text-blue-600">Login</a>
            <a href="/pricing" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Solucao B2B Para Sua Empresa</h2>
        <p className="text-xl text-gray-700 mb-8">Plataforma completa de gerenciamento para empresas brasileiras</p>
        <a href="/pricing" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 inline-block">Comece Agora - Gratis</a>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Recursos Principais</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h4 className="text-xl font-bold mb-2">Autenticacao Segura</h4>
              <p className="text-gray-600">Login seguro com Supabase</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">Dashboard Inteligente</h4>
              <p className="text-gray-600">Analise seus dados em tempo real</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h4 className="text-xl font-bold mb-2">Gerenciamento Completo</h4>
              <p className="text-gray-600">Controle total do seu negocio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Pronto para Transformar Seu Negocio?</h3>
          <p className="mb-8 text-lg">Comece a usar nosso B2B SaaS hoje mesmo. 100% gratis no primeiro mes!</p>
          <a href="/auth" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 inline-block">Registre-se Agora</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 B2B SaaS Platform. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
