import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    room_no: {
      type: Number,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Session = mongoose.model('session', sessionSchema);

export default Session;
