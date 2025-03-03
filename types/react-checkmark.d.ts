declare module "react-checkmark" {
  import React from "react";

  interface CheckmarkProps {
    size?: string;
    color?: string;
    duration?: number;
  }

  export const Checkmark: React.FC<CheckmarkProps>;
}
