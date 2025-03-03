import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface CustomerFormProps {
  allProductsState: any[];
  selectedProductName: string;
  tableId: string;
  handleAddItemClick: (formData: FormData) => void;
  setSelectedProductName: (productName: string) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({
  allProductsState,
  selectedProductName,
  tableId,
  handleAddItemClick,
  setSelectedProductName,
}) => {
  return (
    <form
      action={handleAddItemClick}
      className="flex flex-col items-center justify-center gap-2"
    >
      <h2 className="text-slate-500">Pick a product:</h2>
      <div className="w-[340px] h-20 mb-6">
        <ScrollArea className="w-[340px] whitespace-nowrap rounded-md  border-black">
          <div className="flex w-max space-x-4 p-4">
            {allProductsState.length > 0 ? (
              allProductsState.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                  onClick={() => setSelectedProductName(product.name)}
                >
                  <div
                    className={`bg-white w-14 h-14 rounded-full flex items-center justify-center ${
                      selectedProductName === product.name
                        ? "border-2 border-green-400"
                        : "border broder-slate-300"
                    }`}
                  >
                    <Image
                      src={product.imgUrl}
                      alt="Coca-Cola Picture"
                      width={40}
                      height={50}
                      className=""
                    />
                  </div>
                  <p className="text-sm text-slate-600">{product.name}</p>
                </div>
              ))
            ) : (
              <div className="h-[50px] w-[340px]  flex justify-center items-center">
                <h2>Loading...</h2>
              </div>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center pl-10">
        <div className="mb-2">
          <Label htmlFor="quantity" className="ml-2 text-center">
            Quantity:
          </Label>
          <Input
            id="quantity"
            defaultValue={1}
            type="number"
            name="quantity"
            className="text-center w-20"
          />
          <input
            type="number"
            hidden
            defaultValue={tableId as string}
            name="tableNumber"
          />
        </div>
        <Button className="w-30 bg-slate-600 p-4 mt-4 mr-8 shadow-md">
          Add to list
        </Button>
      </div>
    </form>
  );
};

export default CustomerForm;
