import cors from "cors";
import { json, urlencoded } from "express";
import morgan from "morgan";


export const GlobalMiddleWares = [
  json(), // parse json data
  urlencoded({ extended: false }), // parse urlencoded bodies
  cors(), // accept all cors
  morgan("dev"),
];
