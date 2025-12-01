'use client';

export default function Home() {
  const plans = [
    {
      name: 'Startup',
      price: 'R$ 99',
      period: '/mês',
      description: 'Perfeito para pequenas empresas',
      features: [
        'Até 5 usuários',
        'Até 1.000 registros',
        'Suporte por email',
        'Relatórios básicos',
        'API limitada'
      ]
    },
    {
      name: 'Professional',
      price: 'R$ 299',
      period: '/mês',
      description: 'Para empresas em crescimento',
      features: [
        'Até 50 usuários',
        'Até 100.000 registros',
        'Suporte prioritário',
        'Relatórios avançados',
        'API completa',
        'Integrações',
        'Dashboard customizável'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Sob consulta',
      period: '',
      description: 'Para grandes corporações',
      features: [
        'Usuários ilimitados',
        'Armazenamento ilimitado',
        'Suporte 24/7',
        'Relatórios customizados',
        'API premium',
        'Integrações avançadas',
        'SSO e 2FA',
        'Suporte dedicado'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-500">B2B SaaS Platform</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-slate-100 hover:text-blue-400 transition">Login</button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Solução B2B Para Sua Empresa</h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Plataforma completa de gerenciamento para empresas brasileiras. Gerencie clientes, vendas e operações em um único lugar.</p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition">Começar Agora - Grátis</button>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate-800/30">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Recursos Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-slate-700 rounded-lg hover:border-slate-500 transition">
            <h3 className="text-xl font-bold mb-2">Autenticacao Segura</h3>
            <p className="text-slate-300">Login seguro com Supabase</p>
          </div>
          <div className="p-6 border border-slate-700 rounded-lg hover:border-slate-500 transition">
            <h3 className="text-xl font-bold mb-2">Dashboard Intuitivo</h3>
            <p className="text-slate-300">Interface amigável e responsiva</p>
          </div>
          <div className="p-6 border border-slate-700 rounded-lg hover:border-slate-500 transition">
            <h3 className="text-xl font-bold mb-2">Relatórios Avançados</h3>
            <p className="text-slate-300">Análise completa de seus dados</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Planos de Preços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border-2 p-8 transition transform hover:scale-105 ${
                plan.popular
                  ? 'border-blue-500 bg-slate-800 shadow-2xl'
                  : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'
              }`}
            >
              {plan.popular && (
                <div className="mb-4 inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Popular</div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
              <button className={`w-full py-2 rounded-lg font-semibold transition mb-6 ${
                plan.popular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}>
                Escolher Plano
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-slate-300 flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Pronto para começar?</h2>
        <p className="text-xl text-slate-300 mb-8">Junte-se a centenas de empresas que já usam nossa plataforma</p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition">Criar Conta Grátis</button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>&copy; 2024 B2B SaaS Platform. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
