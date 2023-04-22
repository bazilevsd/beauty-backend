import express, { Request, Response } from "express";

const apiController = {
  auth(req: Request, res: Response) {
    res.json(res.locals.data.token);
  },
};

export { apiController };
