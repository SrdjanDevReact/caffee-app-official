import { signOut } from "@/auth";
import React from "react";
import { Button } from "./ui/button";
import SidebarButton from "./sidebar-button";
import { LogOut } from "lucide-react";

async function LogoutButton() {
  const handleSignOut = async () => {
    try {
      await signOut();
      // Možete dodati dodatne akcije nakon sign out-a
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };
  return (
    <SidebarButton
      size="sm"
      icon={LogOut}
      className="w-full"
      onClick={handleSignOut}
    >
      Log Out
    </SidebarButton>
  );
}

export default LogoutButton;
