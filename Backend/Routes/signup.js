import { Router } from "express";
import User from "../Models/user.js";
import bcrypt from "bcrypt";

const signupRouter = Router();

signupRouter.post("/", async (req, res) => {
  try {
    // | Check for username and password in req body
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Please provide both username and password" });
    }

    // | Check if username already exists in db
    const isUser = await User.findOne({ username: username });
    if (isUser) {
      return res.status(409).json({ error: "Username already exists" });
    }

    // | Hash the password before saving to db
    const passwordHash = await bcrypt.hash(password, 10);
    await bcrypt.compare(password, passwordHash);

    // | Create new user with provided credentials
    const user = await User.create({
      username: username,
      password: passwordHash,
      admin: false,
    });
    res.status(201).json({ username: user.username, _id: user._id });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default signupRouter;
