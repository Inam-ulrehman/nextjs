import mongoose from 'mongoose'

const SampleSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      lowercase: true,
      trim: true,
    },

    image: {
      type: String,
      required: [true, 'Please provide image'],
      maxLength: 100,
    },
    blogHeading: {
      type: String,
      lowercase: true,
      trim: true,
    },
    blogDescription: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
)

export default mongoose.models.Sample || mongoose.model('Sample', SampleSchema)
