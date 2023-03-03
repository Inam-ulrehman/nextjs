import dbConnect from '@/lib/dbConnect'
import Users from '@/models/Users'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req
  // ===========Get a User=========
  if (method === 'GET') {
    try {
      const user = await Users.find()
      return res.status(200).json({ user })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
  // Create a User
  if (method === 'POST') {
    try {
      const user = await Users.create(body)
      return res.status(200).json({ msg: 'User Registered' })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}
