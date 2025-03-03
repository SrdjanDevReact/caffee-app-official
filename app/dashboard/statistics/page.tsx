import { AreaChartInteractiveComponent } from "@/components/area-chart-interactive";
import { BarChartComponent } from "@/components/bar-chart";
import { BarChartMixedComponent } from "@/components/bar-chart-mixed";
import React from "react";

const StatisticsPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-start justify-center gap-5 mt-16">
      <h1 className="text-2xl font-semibold border-b-2 border-slate-600 text-slate-600">
        Statistic of your Store:
      </h1>

      <div className="flex flex-row gap-1">
        <div className="w-80">
          <h1>Nesto</h1>
        </div>
        <BarChartComponent />
        <BarChartMixedComponent />
      </div>
      <div className="w-[87%]">
        <AreaChartInteractiveComponent />
      </div>
    </div>
  );
};

export default StatisticsPage;
