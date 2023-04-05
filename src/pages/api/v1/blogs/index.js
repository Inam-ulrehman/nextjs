import dbConnect from '@/lib/dbConnect'
import Blog from '@/models/Blog'
import { StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req
  // ===========Get a Blog=========
  if (method === 'GET') {
    try {
      const { sort } = req.query
      const queryObject = {}
      let sorted = '-createdAt'

      if (sort) {
        const sortList = sort.split(',').join(' ')
        sorted = sortList
      }

      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 10
      const skip = (page - 1) * limit
      const total = await Blog.find(queryObject)

      let result = await Blog.find(queryObject, '-createdBy')
        .sort(`${sorted}`)
        .skip(skip)
        .limit(limit)

      return res
        .status(StatusCodes.OK)
        .json({ success: true, nbHits: total.length, result })
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ success: false, error })
    }
  }
  // Create a Blog
  if (method === 'POST') {
    try {
      const blog = await Blog.create(body)
      return res
        .status(StatusCodes.OK)
        .json({ success: true, msg: 'Blog Registered' })
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ success: false, error })
    }
  }
}
