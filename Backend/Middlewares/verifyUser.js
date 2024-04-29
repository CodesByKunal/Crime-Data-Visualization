import User from "../Models/user.js";
import jwt from "jsonwebtoken";

const verifyUser = async (req, res, next) => {
  try {
    // | Check for access_token in req.cookies
    const access_token = req.signedCookies.access_token;
    if (!access_token) {
      return res.status(401).json({ token_valid: false });
    }

    // | Decode the access_token
    const decoded = await jwt.verify(access_token, "shhhhh");
    if (!decoded) {
      return res.status(401).json({ token_valid: false });
    }

    // | Find user in db with id
    const user = await User.findById(decoded._id);
    if (!user.admin) {
      return res.status(401).json({ token_valid: false });
    }

    req.userid = user._id;
    next();
  } catch (error) {
    console.error("verifyUser", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export default verifyUser;
