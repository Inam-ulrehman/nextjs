import dbConnect from '@/lib/dbConnect'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req

  // Get a Contact
  if (method === 'GET') {
    return res.status(200).json({ name: 'Get your data' })
  }
  // Create a Contact
  if (method === 'POST') {
    return res.status(200).json({ name: 'Post your data' })
  }
}
