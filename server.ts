require("dotenv").config();
import chalk from "chalk";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";
import bookRouter from "./src/routers/api/bookUser";
import scheduleRouter from "./src/routers/api/schedule";
import checkToken from "./src/config/checkToken";
import usersApi from "../backend/src/routers/api/users";
import ensureLoggedIn from "./src/config/ensureLoggedIn";
import userRouter from "./src/routers/api/users";
import path from "path";
import favicon from "express-favicon";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(checkToken);

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

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use(checkToken);
app.use("/users", userRouter);
app.use("/schedule", scheduleRouter);
app.get("api/book", bookRouter);

app.get("/", (req, res) => {
  res.json({ message: "Service is alive!" });
});

app.listen(PORT, () => {
  console.log(chalk.blue(`Server is starting 🚀 on PORT: ${PORT}`));
});
