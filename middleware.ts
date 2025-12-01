import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Rotas públicas que não requerem autenticação
  const publicRoutes = ['/', '/login', '/register'];
  const isPublicRoute = publicRoutes.includes(pathname);

  // Rotas protegidas que requerem autenticação
  const protectedRoutes = ['/dashboard', '/admin', '/settings'];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // Verificar se o usuário tem um token de autenticação
  // Supabase pode usar diferentes nomes de cookies: sb-jrizqzdoxrkztyryxioz-auth-token
  const authCookies = Array.from(request.cookies.getSetCookie ? request.cookies.getSetCookie() : []);
  const hasAuth = request.cookies.getAll().some(cookie => 
    cookie.name.includes('auth') || 
    cookie.name.includes('session')
  ) || request.headers.get('authorization');

  // Se é uma rota protegida e não tem autenticação, redireciona para login
  if (isProtectedRoute && !hasAuth) {
    url.pathname = '/login';
    url.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(url);
  }

  // Se é login/register e tem autenticação, redireciona para dashboard
  if ((pathname === '/login' || pathname === '/register') && hasAuth) {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
