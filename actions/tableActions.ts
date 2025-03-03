"use server";

import connectDB from "@/lib/db";
import { Table } from "@/models/Table";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createTrSxTables = async () => {
  try {
    await connectDB();
    console.log("Connection established to db from createTables");
    const arr = [...Array(36)];
    arr.map(async (_, index) => {
      await Table.create({
        tableNumber: index + 1,
        status: "Empty",
        order: [],
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchAllTables = async () => {
  await connectDB();
  const tables = await Table.find({});
  return tables;
};

const cleanTableForTableNumber = async (tableNumber: number) => {
  try {
    await connectDB();

    const table = await Table.findOne({ tableNumber });

    if (!table) {
      throw new Error(`Table with number ${tableNumber} not found`);
    }

    table.status = "Empty";
    table.order = [];

    await table.save();
  } catch (error) {
    console.error(error);
    throw new Error("Error placing the order for the table");
  }
  revalidatePath("/dashtryout");
};

const placeOrderForTableNumber = async (formData: FormData) => {
  const tableNumber = formData.get("tableNumber");
  try {
    await connectDB();

    const table = await Table.findOne({ tableNumber });

    if (!table) {
      throw new Error(`Table with number ${tableNumber} not found`);
    }

    table.status = "Placed";

    await table.save();
  } catch (error) {
    console.error(error);
    throw new Error("Error placing the order for the table");
  }

  redirect(`/mobile/customer/${tableNumber}/status`);
};

const takeOrderForTableNumber = async (formData: FormData) => {
  const tableNumber = formData.get("tableNumber");
  try {
    await connectDB();

    const table = await Table.findOne({ tableNumber });

    if (!table) {
      throw new Error(`Table with number ${tableNumber} not found`);
    }

    table.status = "Pending";

    await table.save();
    revalidatePath("/mobile/employee");
    return {
      tableNumber: table.tableNumber,
      status: table.status,
      order: table.order,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error adding item to order list");
  }
};
const deliverOrderForTableNumber = async (formData: FormData) => {
  const tableNumber = formData.get("tableNumber");
  try {
    await connectDB();

    const table = await Table.findOne({ tableNumber });

    if (!table) {
      throw new Error(`Table with number ${tableNumber} not found`);
    }

    table.status = "Delivered";
    table.order = [];

    await table.save();
    revalidatePath("/mobile/employee");
    return {
      tableNumber: table.tableNumber,
      status: table.status,
      order: table.order,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error adding item to order list");
  }
};

const getOrderForTableNumber = async (tableNumber: number) => {
  try {
    await connectDB();

    const table = await Table.findOne({ tableNumber });

    if (!table) {
      throw new Error(`Table with number ${tableNumber} not found`);
    }

    return table.order;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching order for table number");
  }
};
const getStatusForTableNumber = async (tableNumber: number) => {
  try {
    await connectDB();

    const table = await Table.findOne({ tableNumber });

    if (!table) {
      throw new Error(`Table with number ${tableNumber} not found`);
    }

    return table.status;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching order for table number");
  }
};

const addItemToOrderList = async (
  formData: FormData,
  selectedProductName: string
) => {
  const tableNumber = formData.get("tableNumber");
  const productName = formData.get("productName") as string;
  const quantity = formData.get("quantity");
  console.log("ALOO AD ITEM TO ORDER: SELECTED NAME : ", selectedProductName);
  try {
    await connectDB();

    const table = await Table.findOne({ tableNumber });

    if (!table) {
      throw new Error(`Table with number ${tableNumber} not found`);
    }

    const orderItem = { productName: selectedProductName, quantity };

    table.order.push(orderItem);
    await table.save();
    revalidatePath(`/mobile/customer/${tableNumber}`);
    return {
      tableNumber: table.tableNumber,
      status: table.status,
      order: table.order,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error adding item to order list");
  }
};

export {
  createTrSxTables,
  fetchAllTables,
  addItemToOrderList,
  getOrderForTableNumber,
  placeOrderForTableNumber,
  takeOrderForTableNumber,
  deliverOrderForTableNumber,
  cleanTableForTableNumber,
  getStatusForTableNumber,
};
