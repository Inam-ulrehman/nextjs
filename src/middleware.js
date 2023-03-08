import { NextResponse } from 'next/server'

export function middleware(request) {
  // this logic is many routes
  // console.log(request.nextUrl.pathname)

  if (request.nextUrl.pathname.startsWith('/api/v1')) {
    // console.log('middleware')
    // direct response back if fail for actions.

    return NextResponse.next()
  }
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // console.log('dashboard')
    // direct response back if fail for actions.

    return NextResponse.next()
  }
}

// this logic is default
export const config = {
  // any routes to v1 match
  matcher: ['/api/v1/:path*', '/dashboard/:path*'],
}
