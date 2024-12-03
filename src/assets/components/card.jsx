import React from "react";

const Card = ({ data }) => {
  return (
    <div className="div flex gap-[45px] bg-white p-10 rounded-xl absolute top-[150px] z-10	">
      <div className="border-r-2 pr-10">
        <p className=" text-xs	text-gray-500">IP ADDRESS</p>
        <h2 className="text-3xl">{data?.ip}</h2>
      </div>

      <div className="border-r-2 pr-10">
        <p className=" text-xs	text-gray-500">LOCATION</p>
        <h2 className="text-3xl">{data?.location?.region}</h2>
      </div>

      <div className="border-r-2 pr-10">
        <p className=" text-xs	text-gray-500">TIMEZONE</p>
        <h2 className="text-3xl">{data?.location?.timezone}</h2>
      </div>

      <div className="">
        <p className=" text-xs	text-gray-500">ISP</p>
        <h2 className="text-3xl">{data?.isp}</h2>
      </div>
    </div>
  );
};

export default Card;
