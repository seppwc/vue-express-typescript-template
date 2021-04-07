import { Request, Response, Router } from "express";
import { db } from "../../app/db";
const r = Router();

r.get("/", (_: Request, res: Response) => {
  const tasks = db.tasks;
  res.json(tasks);
});

export const taskRouter = r;
