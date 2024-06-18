import express from "express";
import { handleSignUp, handleSignIn } from "../src/controllers/sign.js";

const app = express();
app.use(express.json());

app.post("/api/sign/signup", handleSignUp);
app.post("/api/sign/signin", handleSignIn);

export default app;
