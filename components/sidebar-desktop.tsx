"use client";
import { SidebarItems } from "@/types";
import Link from "next/link";
import SidebarButton from "./sidebar-button";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, MoreHorizontal, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

type UserProps = {
  email: string;
  id: string;
  role: string;
};

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
  user: UserProps;
}

const SidebarDesktop = ({ sidebarItems, user }: SidebarDesktopProps) => {
  const pathname = usePathname();
  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-4 py-4">
        <div className="ml-2 mt-2 flex flex-row items-start justify-start">
          <h3 className="text-3xl font-semibold font-serif border-b text-foreground text-slate-600">
            WithEase
          </h3>
          <span className="text-sm pb-4">©</span>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <SidebarButton
                  variant={pathname === link.href ? "outline" : "ghost"}
                  icon={link.icon}
                  className="w-full"
                >
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
            {sidebarItems.extras}
          </div>
          <div className="absolute left-0 bottom-3 w-full px-3">
            <Separator className="absolute -top-3 left-0 w-full" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-2 items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://st4.depositphotos.com/9998432/24428/v/450/depositphotos_244284796-stock-illustration-person-gray-photo-placeholder-man.jpg" />
                        <AvatarFallback>{user.email}</AvatarFallback>
                      </Avatar>
                      <span>{user.email}</span>
                      <MoreHorizontal size={20} className="ml-8" />
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
                <div className="space-y-1">
                  <Link href="/dashtryout">
                    <SidebarButton size="sm" icon={Settings} className="w-full">
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <SidebarButton
                    size="sm"
                    icon={LogOut}
                    className="w-full"
                    onClick={() => signOut()}
                  >
                    Log Out
                  </SidebarButton>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarDesktop;
