import express, { Request, Response } from "express";

const apiBookController = {
  index(req: Request, res: Response) {
    res.json(res.locals.data.book);
  },
  show(req: Request, res: Response) {
    //console.log("Res full", res);
    res.json(res.locals.data.book);
  },
};

export default apiBookController;
