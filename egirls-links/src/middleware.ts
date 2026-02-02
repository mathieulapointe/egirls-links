import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Support /@username → /u/username
  if (pathname.startsWith('/@')) {
    const username = pathname.slice(2).split('/')[0]
    if (!username) return NextResponse.next()

    const url = req.nextUrl.clone()
    url.pathname = `/u/${username}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/@/:path*'],
}
