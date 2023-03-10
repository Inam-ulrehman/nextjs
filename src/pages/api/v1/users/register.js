import dbConnect from '@/lib/dbConnect'
import { UserRegistrationEmail } from '@/lib/sendgrid/UserRegistrationEmail'
import User from '@/models/User'
import { StatusCodes } from 'http-status-codes'
import { v4 as uuidv4 } from 'uuid'

export default async function handler(req, res) {
  await dbConnect()
  const { method, body, query } = req

  // Create a User
  if (method === 'POST') {
    const { name, lastName, email, password, gender, dateOfBirth } = req.body

    const emailAlreadyExist = await User.findOne({ email })
    const isFirstAccount = await User.countDocuments({})
    const role = isFirstAccount === 0 ? 'admin' : 'user'
    if (emailAlreadyExist) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: 'Email already exist.' })
    }
    const uuid = uuidv4()
    const user = await User.create({
      name,
      lastName,
      gender,
      dateOfBirth,
      email,
      password,
      role,
      uuid,
    })
    const token = await user.createJWT()
    UserRegistrationEmail({ email, uuid })

    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
  }
}
