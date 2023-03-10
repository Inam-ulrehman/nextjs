import { NextResponse } from 'next/server'
import { auth } from './lib/authentication'

export function middleware(request) {
  // this logic is many routes
  // console.log(request.nextUrl.pathname)

  if (request.nextUrl.pathname.startsWith('/api/v1')) {
    // console.log('middleware')
    // direct response back if fail for actions.

    NextResponse.next()
  }
  // ==========Authentication==========

  if (request.nextUrl.pathname.startsWith('/api/v1/auth/')) {
    return auth(request)
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
