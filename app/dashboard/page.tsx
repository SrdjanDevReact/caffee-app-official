"use client";

import {
  cleanTableForTableNumber,
  fetchAllTables,
} from "@/actions/tableActions";
import { BarChartComponent } from "@/components/bar-chart";
import { BarChartMixedComponent } from "@/components/bar-chart-mixed";
import EditKit from "@/components/my-components/EditKit";
import TablePreview from "@/components/my-components/TablePreview";
import TablesView from "@/components/my-components/TablesView";
import { useEffect, useState } from "react";

import io from "socket.io-client";

const socket = io("http://localhost:5000");

interface Table {
  tableNumber: number;
  status: string;
  order: Array<{ productName: string; quantity: number }>;
}

const Dashtryout = () => {
  const [allTables, setAllTables] = useState<Table[]>([]);
  const [tableNumberForDisplay, setTableNumberForDisplay] = useState(1); // Initial value changed to 0
  const [clean, setClean] = useState(false);

  useEffect(() => {
    const getAllTables = async () => {
      const tbls = await fetchAllTables();
      setAllTables(tbls);
    };
    const handleOrderPlaced = (tableId: number) => {
      getAllTables();
    };

    socket.on("orderPlacedSocketServer", handleOrderPlaced);
    socket.on("orderTakenSocketServer", handleOrderPlaced);
    socket.on("orderDeliveredSocketServer", handleOrderPlaced);

    // Cleanup on unmount
    return () => {
      socket.off("orderPlacedSocketServer", handleOrderPlaced);
      socket.off("orderTakenSocketServer", handleOrderPlaced);
      socket.off("orderDeliveredSocketServer", handleOrderPlaced);
    };
  }, []);

  useEffect(() => {
    const getAllTables = async () => {
      const tbls = await fetchAllTables();
      setAllTables(tbls);
    };
    getAllTables();
  }, [clean]);

  const handleTableClick = (index: number) => {
    setTableNumberForDisplay(index);
  };

  const handleCleanTable = async (tableNumber: number) => {
    await cleanTableForTableNumber(tableNumber);
    setClean(!clean);
    socket.emit("cleanTable", tableNumber);
  };

  const currentTable = allTables[tableNumberForDisplay - 1];

  return (
    <div className="max-h-screen h-[97vh] w-[70vw]">
      <div className="w-full h-full flex flex-col rounded-md gap-4 p-2">
        <div className="w-full h-1/2 flex items-center justify-center gap-6">
          <EditKit />
          <TablesView
            allTables={allTables}
            handleTableClick={handleTableClick}
          />
          <TablePreview
            tableNumberForDisplay={tableNumberForDisplay}
            currentTable={currentTable}
            handleCleanTable={handleCleanTable}
          />
        </div>
        <div className=" h-1/2 flex flex-row justify-start items-center gap-4 px-6">
          <BarChartMixedComponent />
          <BarChartComponent />
          <div className="w-2/3 h-4/5  border rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashtryout;
