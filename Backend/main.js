import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import recordsRouter from "./Routes/records.js";
import signupRouter from "./Routes/signup.js";
import loginRouter from "./Routes/login.js";
import verifyUser from "./Middlewares/verifyUser.js";

const PORT = 8000;
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser("screte"));

app.listen(PORT, () => {
  console.log(`Server is Listening on http://localhost:${PORT}`);
});

mongoose.connect("mongodb://localhost:27017/DataSet");

app.get("/health", (req, res) => {
  res.send("Server Health OK");
});

app.use("/records", recordsRouter);

app.use("/signup", signupRouter);

app.use("/login", loginRouter);

app.get("/verify", verifyUser, (req, res) => {
  const { username } = req;
  res.status(200).json({ token_valid: true, username: username });
});