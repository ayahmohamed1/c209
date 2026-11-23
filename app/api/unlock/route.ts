import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const password = formData.get('password')

  if (password !== '2411') {
    return NextResponse.redirect(new URL('/?error=1', request.url), 303)
  }

  const response = NextResponse.redirect(new URL('/gift/aya', request.url), 303)
  response.cookies.set('site_access', 'granted', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })

  return response
}
