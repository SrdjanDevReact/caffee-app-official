import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAllProducts } from "@/actions/productActions";
import Image from "next/image";
import { Product } from "@/models/Product";
import { revalidatePath } from "next/cache";

const ProductsTable = async () => {
  const allProducts = await fetchAllProducts();
  return (
    <div className="grid gap-6 mb-8 mt-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-start gap-10 pb-2">
          <CardTitle className="text-md font-medium border-b">
            Products in Store
          </CardTitle>
          <Link href="/dashboard/addproduct" className="mr-[11vw] pb-2">
            <Button className="bg-slate-500 hover:bg-slate-600">
              Add Product +
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-slate-100 rounded-md">
              <TableRow>
                <TableHead>Picture</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Promotion</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Price</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {allProducts?.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="bg-white border-slate-300 w-14 h-14 rounded-full border flex items-center justify-center">
                      <Image
                        src={product.imgUrl}
                        alt="Coca-Cola Picture"
                        width={40}
                        height={50}
                        className=""
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-lg">{product.name}</TableCell>
                  <TableCell
                    className={`${
                      product.promotion > 0 ? "text-green-500" : "text-cyan-800"
                    }`}
                  >
                    <Button
                      className={`hover:bg-red-100 rounded-sm focus:outline-none bg-slate-100 ${
                        product.promotion > 0
                          ? "text-green-500 hover:bg-green-200 hover:text-green-700"
                          : "text-cyan-800 hover:bg-slate-200"
                      }`}
                    >
                      {product.promotion > 0 ? "Enabled" : "Disabled"}
                    </Button>
                  </TableCell>
                  <TableCell>{product.state}</TableCell>
                  <TableCell>
                    <p className="text-green-600 border border-green-600 rounded-full w-8 h-8 text-center flex items-center justify-center">
                      {product.price} <span className="text-[10px]">$</span>
                    </p>
                  </TableCell>
                  <TableCell>
                    <form
                      action={async () => {
                        "use server";
                        await Product.findByIdAndDelete(product._id);
                        revalidatePath("/dashtryout/products");
                      }}
                    >
                      <input
                        id="userid"
                        value={product._id}
                        type="number"
                        name="userid"
                        disabled
                      />
                      <Button className=" text-red-500 hover:bg-red-200 rounded-sm focus:outline-none bg-red-100 ">
                        Delete
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsTable;
