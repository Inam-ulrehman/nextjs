import dbConnect from '@/lib/dbConnect'
import Users from '@/models/User'
import { StatusCodes } from 'http-status-codes'
dbConnect()
export default async function handler(req, res) {
  const { method, body, query } = req
  // ===========Get a User=========
  if (method === 'GET') {
    const { userid, name } = req.headers
    console.log()
    const user = await Users.findById(
      { _id: userid },
      '-password -uuid -role -notes -forgotPasswordId'
    )
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: 'No user found.' })
    }
    return res.status(StatusCodes.OK).json({ msg: 'success', result: user })
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
