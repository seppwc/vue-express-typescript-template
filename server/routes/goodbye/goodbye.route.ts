import { Request, Response, Router } from "express";

const r = Router();

r.get("/", (_: Request, res: Response) => {
  res.send("goodbye");
});

r.get("/:id", (req: Request, res: Response) => {
  res.send("goodbye " + req.params.id);
});

export const goodbyeRouter = r;
