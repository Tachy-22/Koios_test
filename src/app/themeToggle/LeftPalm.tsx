import Image from "next/image";
import React from "react";
import LeftPalmImg from "../../../public/leftPalm.png";
const LeftPalm = () => {
  return (
    <div className="flex h-[5rem] w-full  justify-center items-center  scale-125">
      <div className="w-[6rem] bg-blue-700 h-[1.5rem] translate-y-1 before:bg-red-300 before:h-6 before:w-4 relative">
        <span className="bg-white absolute translate-x-full w-1 h-[90%] right-0"></span>
      </div>
      <Image src={LeftPalmImg} height={48} width={48} alt="left palm" />
    </div>
  );
};

export default LeftPalm;
