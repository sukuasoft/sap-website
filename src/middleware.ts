import { NextResponse, type NextRequest } from 'next/server'

const adminRoutes = [
  '/login',
  '/',
]

export function middleware(request: NextRequest) {

  const host = request.headers.get('host');
  const { pathname } = request.nextUrl
  const subdomain = host?.split('.')[0] || '';

  if (subdomain === 'admin' && adminRoutes.includes(pathname)) {
    return NextResponse.rewrite(new URL(`/admin${pathname}`, request.url));
  }
  else if (pathname.startsWith('/admin')) {
    return new NextResponse(null, { status: 404 })
  }
}