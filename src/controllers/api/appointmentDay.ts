import express, { Request, Response } from "express";
const apiAppointmentDayController = {
  index(req: Request, res: Response) {
    try {
      res.json(res.locals.data.appointmentDay);
    } catch (error) {
      console.log("ERROR", error);
    }
  },
  show(req: Request, res: Response) {
    try {
      res.json(res.locals.data.appointmentDay);
    } catch (error) {
      console.log("ERROR", error);
    }
  },
};

export default apiAppointmentDayController;
