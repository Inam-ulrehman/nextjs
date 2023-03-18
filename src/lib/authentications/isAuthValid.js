import { NextResponse } from 'next/server'
import * as jose from 'jose'

export const isAuthValid = async (request) => {
  let token = request.cookies.get('token')?.value
  if (token === undefined || !token) {
    return NextResponse.redirect(`http://localhost:3000/user/login`)
  }
  try {
    await jose.jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_WEBSITE}/user/login`
    )
  }
}
