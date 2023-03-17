import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/mongoose-error-handler'
import Contacts from '@/models/Contact'
import { StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req
  // ===========Get a Contact=========
  //    const { date, name, email, phone, confirmed, sort } = req.query
  //   const queryObject = {}
  //   let sorted = ''
  //   // date
  //   if (date) {
  //     queryObject.date = date
  //   }
  //   // name
  //   if (name) {
  //     queryObject.name = { $regex: name, $options: 'i' }
  //   }
  //   // phone
  //   if (phone) {
  //     queryObject.phone = phone
  //   }
  //   // email
  //   if (email) {
  //     queryObject.email = { $regex: email, $options: 'i' }
  //   }
  //   // confirmed
  //   if (confirmed === 'true') {
  //     queryObject.confirmed = true
  //   }

  //   if (sort) {
  //     const sortList = sort.split(',').join(' ')
  //     sorted = sortList
  //   }

  //   const page = Number(req.query.page) || 1
  //   const limit = Number(req.query.limit) || 10
  //   const skip = (page - 1) * limit

  //   let totalOrders = await Appointment.find(queryObject)

  //   let result = await Appointment.find(queryObject)
  //     .sort(`${sorted}`)
  //     .skip(skip)
  //     .limit(limit)

  //   res.status(StatusCodes.OK).json({ result, totalOrders: totalOrders.length })
  // }
  // =================================
  if (method === 'GET') {
    try {
      const contacts = await Contacts.find()

      return res
        .status(StatusCodes.OK)
        .json({ msg: 'success', nbHits: contacts.length, contacts: contacts })
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
