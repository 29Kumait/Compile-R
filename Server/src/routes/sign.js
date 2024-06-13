import express from "express";
import { createContent, getContent } from "../controllers/content.js";

const routerSign = express.Router();

routerSign.get("/", getContent);
routerSign.post("/create", createContent);

export default routerSign;
