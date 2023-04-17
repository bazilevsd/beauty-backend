import Schedule from "../models/shedule";
import express, { Request, Response, NextFunction } from "express";
import { nextTick } from "process";
const dataController = {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("WE ARE IN HERE");
      const schedule = await Schedule.find({});
      console.log("Backend index", schedule);
      res.locals.schedule = schedule;
      console.log("assigned res");
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  async create(req: Request, res: Response) {
    try {
      console.log("Created schedule", req.body);

      const data = await Schedule.create(req.body);
    } catch (error) {
      res.status(500).json({ error });
      console.log("post error", error);
    }
  },
  async edit(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async destroy(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  async show(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default dataController;
