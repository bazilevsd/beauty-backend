/*******
Database Setup
******/
import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";

const db = mongoose.connection;
mongoose.connect(`${process.env.MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
