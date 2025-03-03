"use client";

import React, { useEffect, useState } from "react";
import SidebarDesktop from "./sidebar-desktop";
import {
  Bell,
  GitGraph,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from "lucide-react";
import { SidebarItems } from "@/types";
import SidebarButton from "./sidebar-button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { fetchAllProducts } from "@/actions/productActions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Sidebar = (user: { email: string; id: string; role: string }) => {
  const [allProductsState, setAllproductsState] = useState<any[]>([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const products = await fetchAllProducts();

      setAllproductsState(products);
    };
    getAllProducts();
  }, []);

  const handleButtonClick = () => {
    console.log("ALooo");
    socket.emit("newPromotion", { message: "New promotion!" });
  };

  const sidebarItems: SidebarItems = {
    links: [
      { label: "Dashboard", href: "/dashboard", icon: Home },
      { label: "Products", href: "/dashboard/products", icon: List },
      // { label: "Notifications", href: "/dashtryout/notifications", icon: Bell },
      { label: "Statistics", href: "/dashboard/statistics", icon: GitGraph },
      { label: "Employees", href: "/dashboard/employees", icon: Users },
      { label: "User", href: "/dashboard/user", icon: User },
    ],

    extras: (
      <div className="flex flex-col gap-2">
        <SidebarButton icon={MoreHorizontal} className="w-full">
          More
        </SidebarButton>
        <Popover>
          <PopoverTrigger className="w-full justify-center bg-slate-500 hover:bg-slate-600 rounded-md p-2 text-white">
            Add Promotion
          </PopoverTrigger>
          <PopoverContent className="h-44 w-56 ml-4 bg-slate-100 drop-shadow-2xl flex flex-col justify-center items-center gap-4">
            <Select name="productName">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                {allProductsState?.map((product, index) => (
                  <SelectItem key={index} value={product.name}>
                    {product.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex flex-row gap-1 justify-center items-center">
              <Input placeholder="20%" className="w-16" />
              <Button className="w-20" onClick={handleButtonClick}>
                Add
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    ),
  };
  return <SidebarDesktop sidebarItems={sidebarItems} user={user} />;
};

export default Sidebar;
