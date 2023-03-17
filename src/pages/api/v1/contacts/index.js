import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/mongoose-error-handler'
import Contacts from '@/models/Contact'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req
  // ===========Get a Contact=========
  if (method === 'GET') {
    try {
      const contact = await Contacts.find()
      return res.status(200).json({ contact })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
  // Create a Contact
  if (method === 'POST') {
    try {
      const contact = await Contacts.create(body)
      return res.status(200).json({ msg: 'Contact Registered' })
    } catch (error) {
      return mongooseErrorHandler(error, res)
    }
  }
}
