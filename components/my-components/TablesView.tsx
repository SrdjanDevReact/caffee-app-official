import React from "react";

interface Table {
  tableNumber: number;
  status: string;
  order: Array<{ productName: string; quantity: number }>;
}

interface TablesViewProps {
  allTables: Table[];
  handleTableClick: (tableNumber: number) => void;
}

const TablesView: React.FC<TablesViewProps> = ({
  allTables,
  handleTableClick,
}) => {
  return (
    <div className="w-fit grid grid-cols-6 gap-2 rounded-md border shadow-md p-6">
      {allTables.map((table, index) => (
        <button key={index} onClick={() => handleTableClick(table.tableNumber)}>
          <div
            className={`w-10 h-10 rounded border-4 ${
              table.status === "Placed"
                ? "border-yellow-300 "
                : table.status === "Pending"
                ? "border-orange-300"
                : table.status === "Delivered"
                ? "border-green-400"
                : "border-slate-300" // default color if none of the conditions match
            } flex items-center justify-center text-slate-500 text-lg font-semibold bg-slate-200`}
          >
            {table.tableNumber}
          </div>
        </button>
      ))}
    </div>
  );
};

export default TablesView;
