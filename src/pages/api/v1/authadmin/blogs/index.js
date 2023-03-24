import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/mongoose-error-handler'
import Blogs from '@/models/Blog'
import { StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query, headers } = req
  const userId = headers.userid
  const { image, title, description, blogHeading, blogDescription } = body
  if (method === 'POST') {
    try {
      const blog = await Blogs.create({
        image,
        title,
        description,
        blogHeading,
        blogDescription,
        createdBy: userId,
      })
      return res
        .status(StatusCodes.CREATED)
        .json({ msg: 'Blog is created', result: blog })
    } catch (error) {
      return mongooseErrorHandler(error, res)
    }
  }

  // =============All Items====================
  if (method === 'GET') {
    try {
      const { heading, description, blogHeading, blogDescription, sort } =
        req.query
      const queryObject = {}
      let sorted = ''

      if (heading) {
        queryObject.heading = { $regex: heading, $options: 'i' }
      }

      if (description) {
        queryObject.description = { $regex: description, $options: 'i' }
      }

      if (blogHeading) {
        queryObject.blogHeading = { $regex: blogHeading, $options: 'i' }
      }
      if (blogDescription) {
        queryObject.blogDescription = { $regex: blogDescription, $options: 'i' }
      }

      if (sort) {
        const sortList = sort.split(',').join(' ')
        sorted = sortList
      }

      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 10
      const skip = (page - 1) * limit

      const totalBlogs = await Blogs.find(queryObject)

      let result = await Blogs.find(queryObject)
        .sort(`${sorted}`)
        .skip(skip)
        .limit(limit)

      return res
        .status(StatusCodes.OK)
        .json({ msg: 'success', nbHits: totalBlogs.length, list: result })
    } catch (error) {
      return mongooseErrorHandler(error, res)
    }
  }
  // Delete Many Items
  if (method === 'PATCH') {
    // ========deleteManyBlogs======START

    const _ids = req.body.map((item) => item._id)
    try {
      const result = await Blogs.deleteMany({ _id: { $in: _ids } })
      return res.status(StatusCodes.OK).json({ msg: 'success', result })
    } catch (error) {
      return mongooseErrorHandler(error, res)
    }
  }
}
