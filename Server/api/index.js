import express from "express";
import cors from "cors";
import connectDB from "../src/db/connectDB.js";
import rootRouter from "../src/routes/root.js";

const app = express();
connectDB();

app.use(
  cors({
    origin: process.env.BASE_CLIENT_URL,
  }),
);

app.use("/", rootRouter);

export default app;
