"use server";

import connectDB from "@/lib/db";
import { Product } from "@/models/Product";
import { redirect } from "next/navigation";

const addProduct = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const state = formData.get("state");
  const promotion = formData.get("promotion");
  const price = formData.get("price");
  const imgUrl = formData.get("imgUrl");

  console.log("Name : " + name);
  console.log("State : " + state);
  console.log("Promotion : " + promotion + "%");

  try {
    await connectDB();
    console.log("Connected to database from Product Actions!");
    await Product.create({ name, state, promotion, price, imgUrl });
    console.log("Product created!");
  } catch (error) {
    console.log(error);
  }

  redirect("/dashtryout/products");
};

const fetchAllProducts = async () => {
  await connectDB();
  const products = await Product.find({});
  return products;
};

export { addProduct, fetchAllProducts };
