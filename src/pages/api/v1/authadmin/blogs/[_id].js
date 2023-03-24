import dbConnect from '@/lib/dbConnect'
import { BadRequestError } from '@/lib/errors'
import mongooseErrorHandler from '@/lib/mongoose-error-handler'
import Blog from '@/models/Blog'
import { StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req

  // single blog
  if (method === 'GET') {
    try {
      const result = await Blog.findById(query)

      return res.status(StatusCodes.OK).json({ msg: 'success', result })
    } catch (error) {
      return mongooseErrorHandler(error, res)
    }
  }
  // Delete blog
  if (method === 'DELETE') {
    try {
      const result = await Blog.findByIdAndDelete(query)
      if (!result) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ msg: 'Result not found' })
      }

      return res.status(200).json({ msg: 'Blog deleted successfully' })
    } catch (error) {
      mongooseErrorHandler(error, res)
    }
  }
  // Create a Sample
  if (method === 'POST') {
    return res.status(200).json({ name: 'Post your data' })
  }
}
