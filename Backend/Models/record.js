import mongoose from "mongoose";

const recordFields = {};

const recordSchema = new mongoose.Schema(recordFields, {
  collection: "CrimeRecords",
});

const Records = mongoose.model("CrimeRecords", recordSchema);

export default Records;
