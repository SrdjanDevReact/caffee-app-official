import dynamic from "next/dynamic";
import React from "react";

const Checkmark = dynamic(
  () => import("react-checkmark").then((mod) => mod.Checkmark),
  { ssr: false }
);
const SuccsessComp = () => {
  return (
    <div className="h-[70vh] w-full flex items-center justify-center flex-col">
      <Checkmark />
      <h1 className="text-center text-2xl mt-4 font-bold text-slate-600">
        Order Accepted!!
      </h1>
    </div>
  );
};

export default SuccsessComp;
