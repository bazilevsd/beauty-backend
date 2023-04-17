import express, { Request, Response } from "express";
const apiScheduleController = {
  index(req: Request, res: Response) {
    console.log("WE Are IN INDEX 4");
    console.log("RESPONSE", res);

    res.json(res.locals.schedule);
  },
  show(req: Request, res: Response) {
    //console.log("Res full", res);
    res.json(res.locals.data.schedule);
  },
};

export default apiScheduleController;
