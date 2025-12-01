export default function AdminPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-8">Painel Admin</h1>
      <div className="bg-slate-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-6 py-3 text-left text-white">Empresa</th>
              <th className="px-6 py-3 text-left text-white">Plano</th>
              <th className="px-6 py-3 text-left text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-slate-600 hover:bg-slate-600">
              <td className="px-6 py-4 text-slate-200">Empresa A</td>
              <td className="px-6 py-4 text-slate-200">Enterprise</td>
              <td className="px-6 py-4"><span className="px-3 py-1 bg-green-600 rounded text-white text-sm">Ativo</span></td>
            </tr>
            <tr className="border-t border-slate-600 hover:bg-slate-600">
              <td className="px-6 py-4 text-slate-200">Empresa B</td>
              <td className="px-6 py-4 text-slate-200">Professional</td>
              <td className="px-6 py-4"><span className="px-3 py-1 bg-green-600 rounded text-white text-sm">Ativo</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
