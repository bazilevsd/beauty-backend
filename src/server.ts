require("dotenv").config();
import chalk from "chalk";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";

import checkToken from "./config/checkToken";
// import usersApi from "./routers/api/users";
// import ensureLoggedIn from "./config/ensureLoggedIn";
import userRouter from "./routers/api/users";
import appointmentDayRouter from "./routers/api/appointmentDay";
import path from "path";
import favicon from "express-favicon";
try {
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

  // app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
  app.use(express.static(path.join(__dirname, "build")));

  app.use(checkToken);
  app.use("/users", userRouter);
  app.use("/setappointment", appointmentDayRouter);

  app.get("/", (req, res) => {
    res.json({ message: "Service is alive!" });
  });

  app.listen(PORT, () => {
    console.log(chalk.blue(`Server is starting 🚀 on PORT: ${PORT}`));
  });
} catch (err) {
  console.log(
    `Application has crashed with following error ${JSON.stringify(err)}`
  );
}
