import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/mongoose-error-handler'
import Contacts from '@/models/Contact'
import { StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req
  // ===========Get a Contact=========

  // =================================
  if (method === 'GET') {
    try {
      const { name, email, mobile, sort } = req.query
      const queryObject = {}
      let sorted = ''

      // name
      if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
      }
      // mobile
      if (mobile) {
        queryObject.mobile = { $regex: mobile, $options: 'i' }
      }
      // email
      if (email) {
        queryObject.email = { $regex: email, $options: 'i' }
      }

      if (sort) {
        const sortList = sort.split(',').join(' ')
        sorted = sortList
      }

      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 10
      const skip = (page - 1) * limit

      const totalContacts = await Contacts.find()

      let result = await Contacts.find(queryObject)
        .sort(`${sorted}`)
        .skip(skip)
        .limit(limit)

      return res
        .status(StatusCodes.OK)
        .json({ msg: 'success', nbHits: totalContacts.length, list: result })
    } catch (error) {
      return mongooseErrorHandler(error, res)
    }
  }
  // Create a Contact
  if (method === 'POST') {
    try {
      const contact = await Contacts.create(body)
      return res
        .status(StatusCodes.OK)
        .json({ msg: 'Your request is registered' })
    } catch (error) {
      return mongooseErrorHandler(error, res)
    }
  }
}
