"use client"
import { MotionValue, motion } from "framer-motion";

const CarouselItemsContainer = ({
  children,
  rotateDeg,
}: {
  children: React.ReactNode;
  rotateDeg: MotionValue<number>;
}) => {
  return (
    <div className="h-[400rem]  -translate-x-[50%]     w-full  mx-auto bg-green-">
      <motion.div
        style={{ rotate: rotateDeg }}
        className="w-max h-max  sticky top-10 mx-auto  rounded-full "
      >
        <div className="relative w-[90vh] h-[90vh] flex justify-start    rounded-full z-0 items-center ">
          {children}
        </div>
      </motion.div>
    </div>
  );
};



export default CarouselItemsContainer