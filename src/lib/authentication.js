import { StatusCodes } from 'http-status-codes'
import { NextResponse } from 'next/server'
import { BadRequestError } from './errors'

export const auth = async (req) => {
  const authHeader = req.headers.get('authorization')

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return BadRequestError('Auth is Missing.')
  }

  const token = authHeader.split(' ')[1]

  return NextResponse.json({ message: 'Auth done' }, { status: 401 })
  // return  new BadRequestError('No data found')
}
