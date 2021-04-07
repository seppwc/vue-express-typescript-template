import { Request, Response, Router } from "express";
import { db } from "../../app/db";

const r = Router();

r.get("/", (_: Request, res: Response) => {
  const users = db.users;
  res.json(users);
});

r.get("/:id", (req: Request, res: Response) => {
  const user = db.users.find((user) => user.id === parseInt(req.params.id));
  if (user) {
    res.json(user).sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

export const userRouter = r;
