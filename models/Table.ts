import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true },

  status: { type: String, required: true },

  order: { type: Array },
});

export const Table =
  mongoose.models?.Table || mongoose.model("Table", tableSchema);
