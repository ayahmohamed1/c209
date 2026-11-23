import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname === '/' ||
    pathname === '/api/unlock' ||
    pathname.startsWith('/_next/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  if (request.cookies.get('site_access')?.value !== 'granted') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}
