"use client";
import LoadingComp from "@/components/my-components/LoadingComp";
import SuccsessComp from "@/components/my-components/SuccsessComp";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const StatusPage = () => {
  const [status, setStatus] = useState("Placed");
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname;
  const match = path.match(/customer\/(\d+)\/status/);
  const numberBetween = match ? match[1] : null;
  useLayoutEffect(() => {
    const handleOrderClick = () => {
      socket.emit("orderPlaced", numberBetween);
    };
    handleOrderClick();
  }, []);

  useEffect(() => {
    const handleOrderTaken = (tableId: number) => {
      if (tableId === parseInt(numberBetween as string)) {
        setStatus("Pending");
      }
    };

    socket.on("orderTakenSocketServer", handleOrderTaken);

    // Cleanup on unmount
    return () => {
      socket.off("orderTakenSocketServer", handleOrderTaken);
    };
  }, []);

  useEffect(() => {
    if (status === "Pending") {
      setTimeout(() => {
        router.push(`/mobile/customer/${numberBetween}`);
      }, 2000);
    }
  }, [status, router]);

  return (
    <>
      {status === "Placed" && <LoadingComp />}
      {status === "Pending" && <SuccsessComp />}
    </>
  );
};

export default StatusPage;
