import dbConnect from '@/lib/dbConnect'
import { StatusCodes } from 'http-status-codes'
import multer from 'multer'
import nextConnect from 'next-connect'
import { v4 as uuidv4 } from 'uuid'
const cloudinary = require('cloudinary').v2
const fs = require('fs')

export const config = {
  api: {
    bodyParser: false,
  },
}
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

// ========File upload next js Local Server =========
let filename = uuidv4() + '-' + new Date().getTime()
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/profiles', // destination folder
    filename: (req, file, cb) => cb(null, getFileName(file)),
  }),
})

const getFileName = (file) => {
  filename +=
    '.' +
    file.originalname.substring(
      file.originalname.lastIndexOf('.') + 1,
      file.originalname.length
    )
  return filename
}

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` })
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  },
})

apiRoute.use(upload.array('file')) // attribute name you are sending the file by

apiRoute.post((req, res) => {
  res.status(200).json({ data: `/uploads/profiles/${filename}` }) // response
})

// ==============File upload local server end here ================

export default async function handler(req, res) {
  dbConnect()
  const { method, body, query, headers } = req
  const { userid, name } = headers

  if (method === 'POST') {
    console.log('post hit')
    const middleware = upload.single('file')
    middleware(req, res, async () => {
      if (req.file === undefined) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ msg: `File name must be 'file'` })
      }
      const path = req.file.path
      try {
        const result = await cloudinary.uploader.upload(path, {
          use_filename: true,
          unique_filename: false,
          folder: 'next/testing',
          width: '720',
          height: '720',
          crop: 'fill',
          // background_removal: 'cloudinary_ai',
        })
        fs.unlinkSync(path)
        return res
          .status(StatusCodes.ACCEPTED)
          .json({ msg: 'file is uploaded', result })
      } catch (error) {
        fs.unlinkSync(path)
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ msg: 'uploading error by cloudinary', result: error })
      }
    })
  }
}
