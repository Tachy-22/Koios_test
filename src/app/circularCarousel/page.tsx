import React from "react";
import CircularCarousel from "./circular-carousel";
import LinearImageCarousel from "./components/linear-image-carousel";

const page = async () => {


  return (
    <div className="w-full min-h-screen  flex gap-6 flex-col justify-start items-center bg-stone-500">

      <div className="w-screen h-screen ">
        <CircularCarousel />
      </div>
    </div>
  );
};

export default page;
