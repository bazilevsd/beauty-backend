import AppointmentDay from "../models/appointmentDay";
import express, { Request, Response, NextFunction } from "express";

const appointmentDayController = {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const appdays = await AppointmentDay.find();
      res.locals.data.appointmentDay = appdays;
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  async create(req: Request, res: Response, next: NextFunction) {
    const { date } = req.body;
    try {
      const existDay = await AppointmentDay.findOne({ date: date });
      if (existDay) {
        return;
      } else {
        const data = await AppointmentDay.create(req.body);
        res.locals.data.appointmentDay = data;
        console.log("data", data);
      }
    } catch (error) {
      console.log("error", error);

      res.status(500).json({ error });
    }
    next();
  },

  async edit(req: Request, res: Response, next: NextFunction) {
    const { _id, date, bookingTimes } = req.body;
    try {
      const data = await AppointmentDay.findOneAndUpdate({ _id }, req.body);
      console.log("returned data", data);
      res.locals.data.appointmentDay = data;
      return res.json(data);
    } catch (error) {
      console.log("Edit error", error);

      res.status(500).json({ error });
    }
    next();
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    console.log("delete req", id);
    try {
      await AppointmentDay.findByIdAndDelete(id);
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  async show(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
};

export default appointmentDayController;
