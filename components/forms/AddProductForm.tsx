import { addProduct } from "@/actions/productActions";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const AddProductForm = () => {
  return (
    <form className="my-8 items-center" action={addProduct}>
      <div className="flex flex-col gap-1 items-start">
        <Label htmlFor="email" className="mr-24">
          Product name:
        </Label>
        <Input
          id="name"
          placeholder="Coca-Cola.."
          type="text"
          name="name"
          className="w-6/12"
        />
      </div>
      <div className="w-full flex flex-row">
        <div className="flex flex-col mt-2 gap-1 items-start">
          <Label htmlFor="imgUrl" className="mr-24">
            ImageUrl:
          </Label>
          <Input
            id="imgUrl"
            placeholder="https://pictures.com/myimage.jpg"
            type="text"
            name="imgUrl"
            className="w-full"
          />
        </div>
        <div className="bg-white border-slate-300 w-14 h-14 rounded-full border flex items-center justify-center mt-4 ml-4">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
            }
            alt="Coca-Cola Picture"
            width={40}
            height={50}
            className=""
          />
        </div>
      </div>
      <div className="w-full flex flex-row gap-2 items-start justify-center">
        <div className="flex flex-col mt-2 gap-1 items-start">
          <Label htmlFor="price" className="mr-24">
            Price:
          </Label>
          <Input
            id="price"
            placeholder="4.."
            type="number"
            name="price"
            className=""
          />
        </div>

        <div className="flex flex-col gap-1 mt-2 items-start">
          <Label htmlFor="state" className="">
            Initial state:
          </Label>
          <Input
            id="state"
            placeholder="150.."
            type="number"
            name="state"
            className=""
          />
        </div>
      </div>

      <Button className="bg-slate-500 hover:bg-slate-600   mt-10  w-full text-white rounded-md h-10 font-medium ">
        Add Product
      </Button>

      <p className="text-right text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300">
        <Link href="/dashboard/products" className="border-b">
          Go Back
        </Link>
      </p>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </form>
  );
};

export default AddProductForm;
