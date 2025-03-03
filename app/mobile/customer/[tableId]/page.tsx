"use client";
import { fetchAllProducts } from "@/actions/productActions";
import {
  addItemToOrderList,
  getOrderForTableNumber,
  getStatusForTableNumber,
  placeOrderForTableNumber,
} from "@/actions/tableActions";
import ClientNavbar from "@/components/client-components/client-navbar";
import CustomerForm from "@/components/mobile-components/CustomerForm";
import PlaceOrderForm from "@/components/mobile-components/PlaceOrderForm";
import { useEffect, useState } from "react";

import io from "socket.io-client";

const socket = io("http://localhost:5000");

const CustomersOrderPage = ({ params }: { params: { tableId: string } }) => {
  const [allProductsState, setAllproductsState] = useState<any[]>([]);
  const [orderArrayOnTable, setOrderArrayOnTable] = useState<any[]>([]);
  const [tableStatus, setTableStatus] = useState();
  const [refresh, setRefresh] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState("Coca-Cola");

  const { tableId } = params;

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await fetchAllProducts();
      const orderForTable = await getOrderForTableNumber(parseInt(tableId));
      const status = await getStatusForTableNumber(parseInt(tableId));
      setAllproductsState(products);
      setOrderArrayOnTable(orderForTable);
      setTableStatus(status);
    };
    getAllProducts();
  }, [refresh]);

  useEffect(() => {
    const getOrder = async () => {
      const tbls = await getOrderForTableNumber(parseInt(tableId));
      setOrderArrayOnTable(tbls);
    };
    const handleOrderDelivered = (tableId: number) => {
      getOrder();
    };

    socket.on("orderDeliveredSocketServer", handleOrderDelivered);
    socket.on("cleanTableSocketServer", handleOrderDelivered);

    // Cleanup on unmount
    return () => {
      socket.off("orderDeliveredSocketServer", handleOrderDelivered);
    };
  }, []);

  const handleAddItemClick = async (formData: FormData) => {
    await addItemToOrderList(formData, selectedProductName);
    setRefresh(!refresh);
  };

  return (
    <div className="flex flex-col gap-2 items-center pt-2">
      <ClientNavbar tableId={tableId} />
      <CustomerForm
        allProductsState={allProductsState}
        handleAddItemClick={handleAddItemClick}
        selectedProductName={selectedProductName}
        setSelectedProductName={setSelectedProductName}
        tableId={tableId}
      />
      <PlaceOrderForm
        orderArrayOnTable={orderArrayOnTable}
        placeOrderForTableNumber={placeOrderForTableNumber}
        tableId={tableId}
      />
    </div>
  );
};

export default CustomersOrderPage;
