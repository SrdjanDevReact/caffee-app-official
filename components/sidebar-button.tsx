import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";

interface SideBarButtonProps extends ButtonProps {
  icon?: LucideIcon;
}

const SidebarButton = ({
  icon: Icon,
  className,
  children,
  ...props
}: SideBarButtonProps) => {
  return (
    <Button
      variant="ghost"
      className={cn("gap-2 justify-start", className)}
      {...props}
    >
      {Icon && <Icon size={20} />}
      <span>{children}</span>
    </Button>
  );
};

export default SidebarButton;
