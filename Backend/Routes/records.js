import { Router } from "express";
import Records from "../Models/record.js";
import verifyUser from "../Middlewares/verifyUser.js";

const recordsRouter = Router();

recordsRouter.get("/", verifyUser, async (req, res) => {
  try {
    const data = await Records.aggregate([
      {
        $addFields: {
          year: { $toInt: { $substr: ["$FIR Date", 6, 4] } },
        },
      },
      {
        $group: {
          _id: "$year",
          case: { $count: {} },
        },
      },
      {
        $project: {
          _id: 0,
          year: "$_id",
          case: 1,
        },
      },
      {
        $sort: { year: 1 },
      },
    ]);
    res.status(200).json({ records: data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default recordsRouter;
