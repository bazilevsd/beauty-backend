import User from "../models/user";
import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import express, { Request, Response, NextFunction } from "express";
// import { IGetUserAuthInfoRequest } from "../config/definitioinfile";

export function checkToken(req: Request, res: Response) {
  //@ts-ignore
  console.log("req.user", req.user);
  //@ts-ignore
  res.json(req.exp);
}

const dataController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("req.body", req.body);

      //@ts-ignore
      const user = await User.create(req.body);
      console.log("user", user);

      // token will be a string
      const token = createJWT(user);
      console.log("backend", token);

      // send back the token as a string
      // which we need to account for
      // in the client
      res.locals.data.user = user;
      res.locals.data.token = token;
      next();
    } catch (e) {
      console.log("ERRIR", e);

      res.status(400).json(e);
    }
  },
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      //@ts-ignore
      const user = await User.findOne({ email: req.body.email });
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.locals.data.user = user;
      res.locals.data.token = createJWT(user);
      next();
    } catch {
      res.status(400).json("Bad Credentials");
    }
  },
};

export { dataController };

/* -- Helper Functions -- */
//@ts-ignore
function createJWT(user: User) {
  return jwt.sign(
    // data payload
    { user },
    //@ts-ignore
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
