import { Router } from "express";
import Records from "../Models/record.js";
import verifyUser from "../Middlewares/verifyUser.js";

const recordsRouter = Router();

recordsRouter.get("/", verifyUser, async (req, res) => {
  try {
    const data = await Records.aggregate().facet({
      dataYearCase: [
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
      ],
      dataPSCases: [
        {
          $group: {
            _id: "$Unit Name",
            Case: {
              $sum: 1,
            },
          },
        },
        {
          $project: {
            _id: 0,
            policeStation: "$_id",
            Case: 1,
          },
        },
        {
          $sort: {
            policeStation: 1,
          },
        },
        {
          $limit:10
        }
      ],
    });

    res.status(200).json({ recordsData: data[0] });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default recordsRouter;
