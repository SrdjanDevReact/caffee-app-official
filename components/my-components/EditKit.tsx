import React from "react";
import { Button } from "../ui/button";

const EditKit = () => {
  return (
    <div className="flex flex-col gap-2 border  rounded-md w-64 h-[23rem] shadow-md p-4">
      <div className="w-full flex flex-row gap-2 items-center justify-start">
        <Button
          size="icon"
          className="bg-teal-400 hover:bg-teal-500 text-lg font-semibold w-8 h-8"
        >
          +
        </Button>
        <h3 className="text-slate-600 text-sm">Add Column</h3>
      </div>
      <div className="w-full flex flex-row gap-2 items-center justify-start">
        <Button
          size="icon"
          className="bg-slate-300 hover:bg-slate-500 text-lg font-semibold w-8 h-8"
        >
          -
        </Button>
        <h3 className="text-slate-600 text-sm">Delete Column</h3>
      </div>
      <div className="w-full flex flex-row gap-2 items-center justify-start">
        <Button
          size="icon"
          className="bg-slate-300 hover:bg-slate-500  font-semibold text-sm w-8 h-8"
        >
          x
        </Button>
        <h3 className="text-slate-600 text-sm">Disable Table</h3>
      </div>
      <div className="w-full flex flex-row gap-2 items-center justify-start">
        <Button
          size="icon"
          className="bg-teal-400 hover:bg-teal-500 text-lg font-semibold w-8 h-8"
        >
          +
        </Button>
        <h3 className="text-slate-600 text-sm">Add Row</h3>
      </div>
      <div className="w-full flex flex-row gap-2 items-center justify-start">
        <Button
          size="icon"
          className="bg-slate-300 hover:bg-slate-500 text-lg font-semibold w-8 h-8 shadow-md"
        >
          -
        </Button>
        <h3 className="text-slate-600 text-sm">Delete Row</h3>
      </div>
    </div>
  );
};

export default EditKit;
