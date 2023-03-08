import mongoose from 'mongoose'

const SampleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      maxlength: 200,
      lowercase: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
      maxlength: 1000,
    },
    image: {
      type: String,
      required: [true, 'Please provide image'],
      maxlength: 1000,
    },
    company: {
      type: String,
      required: [true, 'Please provide company'],
      maxlength: 1000,
    },
    description: {
      type: String,
      required: [true, 'Please provide description'],
      maxlength: 4000,
    },
    category: {
      type: String,
      required: [true, 'Please provide category'],
      maxlength: 4000,
    },
    shipping: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide quantity'],
      maxlength: 1000,
    },
    slot: {
      startDate: { type: String, lowercase: true, trim: true },
      endDate: { type: String, lowercase: true, trim: true },
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
