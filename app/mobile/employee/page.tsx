"use client";
import {
  deliverOrderForTableNumber,
  fetchAllTables,
  takeOrderForTableNumber,
} from "@/actions/tableActions";
import DashNav from "@/components/mobile-components/DashNav";
import TablesView from "@/components/mobile-components/TablesView";
import { useEffect, useState } from "react";

import io from "socket.io-client";

const socket = io("http://localhost:5000");

interface Table {
  tableNumber: number;
  status: string;
  order: Array<{ productName: string; quantity: number }>;
}

const EmployeePage = () => {
  const [allTables, setAllTables] = useState<Table[]>([]);
  const [refreshData, setRefreshData] = useState(false);
  const [notificationsToggle, setNotificationsToggle] = useState(false);
  const [allNotifications, setAllNotifications] = useState<string[]>([]);

  useEffect(() => {
    const getAllTables = async () => {
      const tbls = await fetchAllTables();
      setAllTables(tbls);
    };
    getAllTables();
  }, [refreshData]);

  useEffect(() => {
    const getAllTables = async () => {
      const tbls = await fetchAllTables();
      setAllTables(tbls);
    };
    const handleOrderPlaced = (tableId: number) => {
      getAllTables();
      setAllNotifications((prevNotifications) => [
        ...prevNotifications,
        `Table ${tableId} ordered list!`,
      ]);
      setNotificationsToggle(true);
    };

    const handleClearedTable = (tableId: number) => {
      getAllTables();
      setAllNotifications((prevNotifications) => [
        ...prevNotifications,
        `Admin cleaned table ${tableId}`,
      ]);
      setNotificationsToggle(true);
    };

    socket.on("cleanTableSocketServer", handleClearedTable);
    socket.on("orderPlacedSocketServer", handleOrderPlaced);

    // Cleanup on unmount
    return () => {
      socket.off("orderPlacedSocketServer", handleOrderPlaced);
      socket.off("cleanTableSocketServer", handleClearedTable);
    };
  }, []);

  const handleButtonTakeOrder = async (
    formData: FormData,
    tableNumber: number
  ) => {
    await takeOrderForTableNumber(formData);
    setRefreshData(!refreshData);
    socket.emit("orderTaken", tableNumber);
  };

  const handleButtonDeliverOrder = async (
    formData: FormData,
    tableNumber: number
  ) => {
    await deliverOrderForTableNumber(formData);
    setRefreshData(!refreshData);
    socket.emit("orderDelivered", tableNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-2 gap-2">
      <DashNav
        allNotifications={allNotifications}
        setNotificationsToggle={setNotificationsToggle}
        notificationsToggle={notificationsToggle}
      />
      <TablesView
        allTables={allTables}
        handleButtonDeliverOrder={handleButtonDeliverOrder}
        handleButtonTakeOrder={handleButtonTakeOrder}
      />
    </div>
  );
};

export default EmployeePage;
