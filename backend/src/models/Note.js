import mongoose from 'mongoose';

// 1° Create schema
const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// 2° Model based off that schema
export default mongoose.model('Note', schema);
