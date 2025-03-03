"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell } from "lucide-react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const ClientNavbar = ({ tableId }: { tableId: string }) => {
  const [notificationToggle, setNotificationToggle] = useState(false);
  console.log(
    "IZ KLIJENT NAVBARA TI PISEM PISEMO DA DRUGOVI NISMO : ",
    tableId
  );
  useEffect(() => {
    const handleNewPromotion = () => {
      setNotificationToggle(true);
    };
    socket.on("newPromotionSocketServer", handleNewPromotion);
    return () => {
      socket.off("newPromotionSocketServer", handleNewPromotion);
    };
  }, []);
  return (
    <div className="w-[95vw] h-14 flex items-center justify-between pr-4 mb-4">
      <div className="w-16"></div>
      <h1 className="text-center text-2xl ml-2 font-semibold text-slate-600 border-b">
        Table {tableId}
      </h1>
      <Sheet>
        <SheetTrigger
          className={`${
            notificationToggle
              ? "bg-green-600 hover:bg-green-700"
              : "bg-slate-600 hover:bg-slate-500"
          } h-9 w-10 flex items-center justify-center text-white rounded-[8px]`}
          onClick={() => setNotificationToggle(false)}
        >
          <Bell />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ClientNavbar;
