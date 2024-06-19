import express from "express";
import cors from "cors";
import { logError } from "./util/logging.js";
import rootRouter from "./routes/root.js";
import routerSign from "./routes/sign.js";
import routerContent from "./routes/content.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: process.env.BASE_CLIENT_URL,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use("/", rootRouter);
app.use("/api", routerSign);
app.use("/api", routerContent);

// Error handling middleware
app.use((err, req, res, next) => {
  logError(err);
  res.status(500).send("ERROR handling middleware!");
});

export default app;
