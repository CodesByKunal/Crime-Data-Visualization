import { Router } from "express";
import User from "../Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginRouter = Router();

loginRouter.post("/", async (req, res) => {
  try {
    // | Check for username and password in req body
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Please provide both username and password" });
    }

    // | Find username in db
    const userMatch = await User.findOne({ username: username });
    if (!userMatch) {
      return res
        .status(400)
        .json({ error: "Username or Password is Incorrect" });
    }

    // | Compare password by user with hassed Password from db
    const passwordMatch = await bcrypt.compare(password, userMatch.password);
    if (passwordMatch) {
      // | Generate jwt token and set to cookies
      let access_token = jwt.sign(
        { username: userMatch.username, _id: userMatch._id },
        "shhhhh"
      );
      res.cookie("access_token", access_token, {
        signed: true,
        secure: true,
        httpOnly: true,
        domain: "localhost",
      });
      return res.status(200).json({ userid: userMatch._id });
    }

    return res.status(409).json({ error: "Username or Password is Incorrect" });
  } catch (error) {
    console.error("Err in login", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default loginRouter;
