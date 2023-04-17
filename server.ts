import dotenv from "dotenv";
dotenv.config();
import chalk from "chalk";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";
import bookRouter from "./src/routers/api/bookUser";
import scheduleRouter from "./src/routers/api/schedule";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

const db = mongoose.connection;
mongoose.connect(`${process.env.MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

db.once("open", () => {
  console.log("connected to mongo");
});

app.use("/schedule", scheduleRouter);
app.get("api/book", bookRouter);

app.get("/", (req, res) => {
  res.json({ message: "Service is alive!" });
});

app.listen(PORT, () => {
  console.log(chalk.blue(`Server is starting 🚀 on PORT: ${PORT}`));
});
