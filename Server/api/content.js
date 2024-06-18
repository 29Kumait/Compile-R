import express from "express";
import { createContent, getContent } from "../src/controllers/content.js";

const app = express();
app.use(express.json());

app.get("/api/content", getContent);
app.post("/api/content/create", createContent);

export default app;
