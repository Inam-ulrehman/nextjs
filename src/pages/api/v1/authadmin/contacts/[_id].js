import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/mongoose-error-handler'
import Contact from '@/models/Contact'
import { StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req

  // Get a Sample
  if (method === 'GET') {
    try {
      const result = await Contact.findById(query)
      if (!result) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ msg: 'No record match' })
      }
      return res.status(StatusCodes.OK).json({ msg: 'success', result })
    } catch (error) {
      return mongooseErrorHandler(error, res)
    }
  }
  // Create a Sample
  if (method === 'POST') {
    return res.status(200).json({ name: 'Post your data' })
  }
}
