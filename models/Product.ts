import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },

  state: { type: Number, required: true },

  promotion: { type: Number },

  price: { type: Number, required: true },

  imgUrl: { type: String },
});

export const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);
