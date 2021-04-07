import { Request, Response, Router } from "express";

const r = Router();

r.get("/", (_: Request, res: Response) => {
  res.send("hello");
});

export const helloRouter = r;
