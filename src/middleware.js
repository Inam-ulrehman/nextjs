import { Router } from 'next/router'
import { NextResponse } from 'next/server'
import { auth } from './lib/authentication'
import { isAuthValid } from './lib/isAuthValid'

export function middleware(request, response, event) {
  // this logic is many routes
  // console.log(request.nextUrl.pathname)
  // event.waitUntil(
  //   fetch('https://my-analytics-platform.com', {
  //     method: 'POST',
  //     body: JSON.stringify({ pathname: req.nextUrl.pathname }),
  //   })
  // )

  if (request.nextUrl.pathname.startsWith('/api/v1')) {
    NextResponse.next()
  }
  // ==========Authentication Back End==========

  if (request.nextUrl.pathname.startsWith('/api/v1/auth/')) {
    return auth(request)
  }
  // ==========Authentication Front End==========
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    console.log('dashboard')
    // direct response back if fail for actions.
    isAuthValid(request)
    if (isAuthValid()) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(`http://localhost:3000/user/login`)
    }
  }
}

// this logic is default
export const config = {
  // any routes to v1 match
  matcher: ['/api/v1/:path*', '/dashboard/:path*'],
}
