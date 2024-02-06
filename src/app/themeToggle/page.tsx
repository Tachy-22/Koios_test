import React from "react";
import LeftPalm from "./LeftPalm";
import RightPalm from "./RightPalm";

const page = () => {
  return (
    <div className="w-full h-fit  flex justify-center p-24 cursor-pointer">
      <div className="w-[15rem] bg-gray-400 border p-2 scale-[150%] rounded-[5rem] flex relative">
        <div className=" w-full    flex  rounded-[5rem] transition-all relative delay-1000 duration-500 overflow-hidden z-30 ">
          <input
            type="checkbox"
            className="transition-all delay-1000 duration-500 checked:translate-x-0 translate-x-[7.8rem] opacity-0  h-[5rem] w-[5rem] cursor-pointer aspect-square rounded-full peer z-10   "
          />
          <div className="absolute z-0 right-0 peer-checked:animate-static-remain translate-x-[120%] animate-pull-toggle   ">
            <RightPalm />
          </div>
          <div className="absolute z-0 left-0 peer-checked:animate-grab-toggle -translate-x-[120%] animate-static-remain-left duration-500  ">
            <LeftPalm />
          </div>

          <div className="transition-all delay-1000 duration-500 bg-gray-900 w-[5rem] h-[5rem] peer-checked:translate-x-0 translate-x-[8.7rem] rounded-full absolute z-0 peer-checked:bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default page;
