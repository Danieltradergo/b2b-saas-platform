import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('sb-auth-token')?.value;
  const url = request.nextUrl.clone();

  // Rotas que requerem autenticação
  const protectedRoutes = ['/dashboard', '/admin', '/settings'];
  const authRoutes = ['/login', '/register'];

  const isProtectedRoute = protectedRoutes.some(route => 
    url.pathname.startsWith(route)
  );
  const isAuthRoute = authRoutes.some(route => 
    url.pathname.startsWith(route)
  );

  // Se não tem token e tenta acessar rota protegida, redireciona para login
  if (isProtectedRoute && !token) {
    url.pathname = '/login';
    url.search = `?redirectTo=${request.nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  // Se tem token e tenta acessar login/register, redireciona para dashboard
  if (isAuthRoute && token) {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
