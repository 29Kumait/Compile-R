import express from "express";
import connectDB from "../src/db/connectDB.js";
import rootRouter from "../src/routes/root.js";
import cors from "cors";

const app = express();
connectDB();

app.use(
  cors({
    origin: process.env.BASE_CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);

app.use(express.json());

app.use("/", rootRouter);

app.options("*", cors());

export default app;
