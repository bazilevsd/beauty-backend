import Book from "../models/bookUser";
import { Request, Response, NextFunction } from "express";

const dataController = {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const schedule = await Book.find();
      return res.json(schedule);
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  async create(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  async edit(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  async destroy(req: Request, res: Response, next: NextFunction) {
    try {
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

export default dataController;
