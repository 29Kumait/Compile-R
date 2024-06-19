import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://compile-r-client.vercel.app", // Allow this origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Routes
import signRoutes from "./routes/sign.js";
import contentRoutes from "./routes/content.js";
import rootRoutes from "./routes/root.js";

app.use("/api/sign", signRoutes);
app.use("/api/content", contentRoutes);
app.use("/", rootRoutes);

export default app;
