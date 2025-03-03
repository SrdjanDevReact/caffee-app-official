import dynamic from "next/dynamic";
import React from "react";
const Circles = dynamic(
  () => import("react-loader-spinner").then((mod) => mod.Circles),
  { ssr: false }
);

const LoadingComp = () => {
  return (
    <div className="h-[70vh] w-full flex items-center justify-center flex-col">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />

      <h1 className="text-center text-2xl mt-4 font-bold text-slate-600">
        Waiting for order to be accepted..
      </h1>
    </div>
  );
};

export default LoadingComp;
