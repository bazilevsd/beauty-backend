import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default function checkToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token =
    req.get("Authorization")?.toString() || req.query.token?.toString();
  if (token) {
    token = token.replace("Bearer ", "");
    jwt.verify(
      token,
      process.env.SECRET as jwt.Secret,
      function (err, decoded) {
        //@ts-ignore
        req.user = err ? null : decoded?.user;
        //@ts-ignore
        req.exp = err ? null : new Date(decoded.exp * 1000);
      }
    );
    return next();
  } else {
    //@ts-ignore
    req.user = null;
    return next();
  }
}
