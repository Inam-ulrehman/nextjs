import { Router } from 'next/router'
import { NextResponse } from 'next/server'
import { auth } from './lib/authentication'

export function middleware(request) {
  // this logic is many routes
  // console.log(request.nextUrl.pathname)

  if (request.nextUrl.pathname.startsWith('/api/v1')) {
    NextResponse.next()
  }
  // ==========Authentication Back End==========

  if (request.nextUrl.pathname.startsWith('/api/v1/auth/')) {
    return auth(request)
  }
  // ==========Authentication Front End==========
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // console.log('dashboard')
    // direct response back if fail for actions.
    console.log('hello from dashboard')

    return NextResponse.next()
  }
}

// this logic is default
export const config = {
  // any routes to v1 match
  matcher: ['/api/v1/:path*', '/dashboard/:path*'],
}
