import { NextResponse } from 'next/server'

export function middleware(request) {
  // this logic is many routes
  if (request.nextUrl.pathname.startsWith('/random')) {
    console.log(request.body)

    return NextResponse.next()
  }
}

// this logic is default
export const config = {
  matcher: ['/api/v1/random:function*'],
}
