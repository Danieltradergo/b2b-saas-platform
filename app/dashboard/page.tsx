export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-slate-700 rounded-lg p-6">
          <div className="text-slate-400 text-sm mb-2">Total Empresas</div>
          <div className="text-3xl font-bold text-white">12</div>
        </div>
        <div className="bg-slate-700 rounded-lg p-6">
          <div className="text-slate-400 text-sm mb-2">Receita Més</div>
          <div className="text-3xl font-bold text-white">R$ 8.500</div>
        </div>
        <div className="bg-slate-700 rounded-lg p-6">
          <div className="text-slate-400 text-sm mb-2">Plano Atual</div>
          <div className="text-xl font-bold text-blue-400">Enterprise</div>
        </div>
      </div>
    </div>
  );
}
