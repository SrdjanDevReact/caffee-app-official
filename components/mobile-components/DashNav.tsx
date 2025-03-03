import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell } from "lucide-react";

interface DashNavProps {
  notificationsToggle: boolean;
  setNotificationsToggle: (value: boolean) => void;
  allNotifications: string[];
}

const DashNav: React.FC<DashNavProps> = ({
  notificationsToggle,
  setNotificationsToggle,
  allNotifications,
}) => {
  return (
    <div className="w-[95vw] h-14 flex items-center justify-between pr-4 mb-4">
      <div className="w-16"></div>
      <h1 className="text-center text-2xl ml-2 font-semibold text-slate-600 border-b">
        Dashboard
      </h1>
      <Sheet>
        <SheetTrigger
          className={`${
            notificationsToggle
              ? "bg-red-500 hover:border-r-red-600"
              : "bg-slate-600 hover:bg-slate-500"
          } h-9 w-10 flex items-center justify-center text-white rounded-[8px]`}
          onClick={() => setNotificationsToggle(false)}
        >
          <Bell className="" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Your Notifications:</SheetTitle>
            <SheetDescription>
              Here you can find any order in real time applications!
            </SheetDescription>
          </SheetHeader>
          <div className="h-[40vh] flex flex-col items-center justify-start pt-6 gap-2">
            {allNotifications.map((notification, index) => (
              <div
                key={index}
                className="w-[250px] h-12 border rounded-md flex flex-col items-center justify-center "
              >
                <h3>{notification}</h3>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DashNav;
