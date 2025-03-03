import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface PlaceOrderProps {
  orderArrayOnTable: any[];
  placeOrderForTableNumber: (formData: FormData) => void;
  tableId: string;
}

const PlaceOrderForm: React.FC<PlaceOrderProps> = ({
  orderArrayOnTable,
  placeOrderForTableNumber,
  tableId,
}) => {
  return (
    <>
      <div>
        <h2>Items in your Order:</h2>
      </div>
      <ScrollArea className="h-72 w-64 rounded-md border p-2">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Order:</h4>
          {orderArrayOnTable.map((item: any, index: number) => (
            <div key={index} className="text-sm">
              {item.productName} - {item.quantity}
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
      <h4 className="text-sm font-medium leading-none text-slate-600">
        Price: 14.00$
      </h4>
      <form action={placeOrderForTableNumber}>
        <Button
          className="bg-green-600 mt-6 text-sm font-bold shadow-md hover:bg-green-700 active:bg-green-700"
          size={"lg"}
        >
          Place your Order
        </Button>
        <input type="number" hidden defaultValue={tableId} name="tableNumber" />
      </form>
    </>
  );
};

export default PlaceOrderForm;
