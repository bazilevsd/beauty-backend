import mongoose from "mongoose";
const timeSlot = new mongoose.Schema({
  time: { type: String },
  available: { type: Boolean },
  userData: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const TimeSlot = mongoose.model("TimeSlot", timeSlot);

export default TimeSlot;
