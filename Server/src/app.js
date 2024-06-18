import express from "express";
import cors from "cors";
import { logError } from "./util/logging.js";
import rootRouter from "./routes/root.js";
import routerSign from "./routes/sign.js";
import routerContent from "./routes/content.js";

const app = express();
app.use(express.json());

// Configure CORS
app.use(
  cors({
    origin: process.env.BASE_CLIENT_URL, //  only client url
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, //  credentials
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);

app.use("/", rootRouter);
app.use("/api", routerSign);
app.use("/api", routerContent);

// Error handling middleware
app.use((err, req, res, next) => {
  logError(err);
  res.status(500).send("ERROR handling middleware!");
});

export default app;
