import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface Table {
  tableNumber: number;
  status: string;
  order: Array<{ productName: string; quantity: number }>;
}

interface TablesViewProps {
  allTables: Table[];
  handleButtonTakeOrder: (formData: FormData, tableNumber: number) => void;
  handleButtonDeliverOrder: (formData: FormData, tableNumber: number) => void;
}

const TablesView: React.FC<TablesViewProps> = ({
  allTables,
  handleButtonTakeOrder,
  handleButtonDeliverOrder,
}) => {
  return (
    <>
      {allTables?.map((table, index) => (
        <div
          key={index}
          className="w-[280px] h-14 border-1 rounded-md border-slate-900 bg-gray-50 flex flex-row gap-2 justify-between items-center px-4 mb-4 drop-shadow-lg"
        >
          <h3>Table {table.tableNumber}</h3>
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="text-neutral-600 text-sm max-w-sm  dark:text-neutral-300">
              {table.status}
            </p>
            <Popover>
              <PopoverTrigger
                className={`border-[3px] border-slate-400 rounded-sm text-slate-100 text-sm w-10 h-8 font-semibold shadow-md ${
                  table.status === "Placed"
                    ? "bg-yellow-400 "
                    : table.status === "Pending"
                    ? "bg-orange-400"
                    : table.status === "Delivered"
                    ? "bg-green-400"
                    : "bg-slate-300" // default color if none of the conditions match
                }`}
              >
                O
              </PopoverTrigger>
              <PopoverContent className="mr-4 bg-slate-100 drop-shadow-2xl">
                <h2 className="text-center text-xl font-extrabold dark:text-white">
                  Table {table.tableNumber}
                </h2>
                <div className="flex justify-center">
                  <h2 className="text-lg">Order:</h2>
                </div>
                <ScrollArea className="h-72 w-full rounded-md border p-2 mt-2 mb-6 text-sm font-mono">
                  <div className="p-4 flex flex-col ">
                    {table.order.map((item: any, index: number) => (
                      <div key={index}>
                        {item.productName} - {item.quantity}
                        <Separator className="my-2" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex flex-row gap-2 items-center justify-center mt-2">
                  <form
                    action={(formData: FormData) =>
                      handleButtonTakeOrder(formData, table.tableNumber)
                    }
                  >
                    <Button className="text-sm font-light">Take order</Button>
                    <input
                      type="number"
                      hidden
                      defaultValue={table.tableNumber}
                      name="tableNumber"
                    />
                  </form>
                  <form
                    action={(formData: FormData) =>
                      handleButtonDeliverOrder(formData, table.tableNumber)
                    }
                  >
                    <Button className="bg-emerald-500 text-sm font-light hover:bg-emerald-600">
                      Delivered
                    </Button>
                    <input
                      type="number"
                      hidden
                      defaultValue={table.tableNumber}
                      name="tableNumber"
                    />
                  </form>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      ))}
    </>
  );
};

export default TablesView;
