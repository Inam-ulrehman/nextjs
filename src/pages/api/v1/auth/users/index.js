import Users from '@/models/User'
import { StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  const { method, body, query } = req
  // ===========Get a User=========
  if (method === 'GET') {
    const { userid, name } = req.headers

    const user = await Users.findById({ _id: userid })
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: 'No user found.' })
    }
    return res.status(StatusCodes.OK).json({ user })
  }
  //Update
  if (method === 'PATCH') {
    try {
      const user = await Users.create(body)
      return res.status(200).json({ msg: 'User Registered' })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}
