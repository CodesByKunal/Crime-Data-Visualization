import { Router } from "express";
import Records from "../Models/record.js";
import verifyUser from "../Middlewares/verifyUser.js";

const recordsRouter = Router();

recordsRouter.get("/", verifyUser, async (req, res) => {
  try {
    const data = Records.find({})
      .skip(100)
      .limit(100)
      .where("Latitude")
      .ne(0)
      .cursor();
    data.on("data", (doc) => {
      res.write(`${JSON.stringify(doc)}\n\n`);
    });
    data.on("end", () => {
      res.end();
    });
    data.on("error", (error) => {
      console.error(error);
      throw new Error("Error in Pipe Line");
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default recordsRouter;
