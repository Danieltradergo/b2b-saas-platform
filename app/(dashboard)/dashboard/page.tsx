export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Bem-vindo ao seu painel de controle</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Empresas Ativas</h3>
          <p className="text-3xl font-bold text-white">1</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Usuarios</h3>
          <p className="text-3xl font-bold text-white">5</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h3 className="text-sm font-medium text-slate-400 mb-2">Plano Atual</h3>
          <p className="text-3xl font-bold text-white">Pro</p>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
        <h2 className="text-xl font-semibold text-white mb-4">Atividade Recente</h2>
        <p className="text-slate-400">Nenhuma atividade recente</p>
      </div>
    </div>
  );
}
