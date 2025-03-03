import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface Table {
  tableNumber: number;
  status: string;
  order: Array<{ productName: string; quantity: number }>;
}

interface TablesPreviewProps {
  tableNumberForDisplay: number;
  currentTable: Table;
  handleCleanTable: (tableNumber: number) => void;
}

const TablePreview: React.FC<TablesPreviewProps> = ({
  tableNumberForDisplay,
  currentTable,
  handleCleanTable,
}) => {
  return (
    <div className="flex flex-col gap-2 border pt-4 px-4 rounded-md w-64 h-[23rem] justify-start pl-16 shadow-md">
      <h2 className="font-bold text-xl text-slate-400 dark:text-neutral-200 border-b-2 mr-10 text-center">
        Table {tableNumberForDisplay}
      </h2>
      {currentTable ? (
        <>
          <div className="flex flex-col items-center justify-center pr-8">
            <div className="flex flex-row items-start justify-start mr-4 mb-2">
              <p className="text-neutral-600 text-sm w-full mt-2 dark:text-neutral-300">
                Status:{" "}
                <span className="ml-1  text-slate-400">
                  {currentTable.status}
                </span>
              </p>
            </div>
            <ScrollArea className="h-52 w-48 rounded-md border-2 p-2 mr-4">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">
                  Order:
                </h4>
                {currentTable.order.map((item, index) => (
                  <div key={index} className="text-sm">
                    {item.productName} - {item.quantity}
                    <Separator className="my-2" />
                  </div>
                ))}
              </div>
            </ScrollArea>

            <Button
              onClick={() => handleCleanTable(tableNumberForDisplay)}
              className="mt-2 mr-2"
            >
              Clean Table
            </Button>
          </div>
        </>
      ) : (
        <p>Loading...</p> // or any other fallback UI
      )}
    </div>
  );
};

export default TablePreview;
