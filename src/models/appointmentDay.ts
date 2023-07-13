import mongoose from "mongoose";
const appointmentDay = new mongoose.Schema({
  date: { type: String },
  bookingTimes: [
    {
      time: { type: String },
      available: { type: Boolean },
      firstName: { type: String },
      lastName: { tipe: String },
      phoneNumber: { type: String },
      email: { type: String },
      reason: { type: String },
    },
  ],
});
const AppointmentDay = mongoose.model("Appointmentday", appointmentDay);

export default AppointmentDay;
