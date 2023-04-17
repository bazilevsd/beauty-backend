import mongoose from "mongoose";
const schedule = new mongoose.Schema({
  schedule: [
    {
      id: String,
      day: String,
      startTime: String,
      endTime: String,
    },
  ],
});

const Schedule = mongoose.model("Schedule", schedule);

export default Schedule;
