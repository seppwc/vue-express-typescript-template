import express from "express";
import { GlobalMiddleWares } from "../middlewares/Global.middleware";
import { Router } from "../routes/Router";

const app = express();

app.use(GlobalMiddleWares);
app.use(Router);

export default app;
