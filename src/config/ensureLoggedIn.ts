import { Request, Response, NextFunction } from "express";

export default function ensureLoggedIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // console.log("User", req.user);
  //@ts-ignore
  if (!req.user) return res.status(401).json("Unauthorized");
  next();
}
