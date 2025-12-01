export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-500 mb-2">B2B SaaS Platform</h1>
          <p className="text-slate-400">Plataforma completa para empresas brasileiras</p>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          {children}
        </div>
        <p className="text-center text-slate-400 text-sm mt-4">
          © 2024 B2B SaaS Platform. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
