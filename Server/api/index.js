import express from "express";
import connectDB from "../src/db/connectDB.js";
import rootRouter from "../src/routes/root.js";

const app = express();
connectDB();

app.use("/", rootRouter);

export default app;
