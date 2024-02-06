"use client";
import React from "react";

import { MotionValue, motion } from "framer-motion";
import { Check, ChevronsLeft, Info, X } from "lucide-react";
import { RefObject, useCallback, useState } from "react";
import ModalButton from "./modal-button";
import LinearImageCarousel from "./linear-image-carousel";
import { Button } from "@nextui-org/react";

const CarouselItemLR = ({
  children,
  onClick,
  rotateDegConst,
  index,
  rotateDegSmall,
  itemRef,
  clickable,
  recipe,
}: {
  children: React.ReactNode;
  rotateDegConst: any;
  rotateDegSmall: MotionValue<number>;
  onClick?: ((itemRef: any) => void) | undefined;
  itemRef?: RefObject<HTMLDivElement>;
  clickable: boolean;
  index: number;
  recipe: any;
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsClicked(true);
    console.log("clicked lr", clickable, itemRef, index);
    clickable && onClick && itemRef && onClick(itemRef);
  }, [clickable, index, itemRef, onClick]);
  console.log("isClicked", isClicked);
  return (
    <>
      <motion.div
        style={{ rotate: rotateDegSmall }}
        className={` group    justify-end items-end flex`}
      >
        <div
          onMouseLeave={() => {
            setIsClicked(false);
          }}
          style={{ rotate: `${-rotateDegConst * index}deg` }}
          className={` flex    duration-1000 transition-all rounded-full  white p-1 bg-white relative items-center  ${
            isClicked ? " translate-x-[30%]  " : " "
          }`}
        >
          <div
            onClick={handleClick}
            style={{ rotate: `${-rotateDegConst * index}deg` }}
            className={` h-full z-10  overflow- flex   max-w-[9rem] rounded-full   white  bg-re-50 max-h-[9rem] min-h-[9rem] p-2  w-[9rem] min-w-[9rem] rotate-[90deg] `}
          >
            {" "}
            {children}
          </div>
          <div
            className={`  h-full gap-2  right-0 duration-700 transition-all     ${
              isClicked
                ? " flex flex-col    w-[13rem] opacity-100  px-4 translate-x-0 "
                : " w-0  opacity-0 -translate-x-full"
            }  `}
          >
            <p className="text-base text- w-full uppercase text-black px-2">
              {" "}
              {recipe.cuisine}
            </p>
            <div className="w-full   flex justify-between">
              <Button
                isIconOnly
                onPress={() => {
                  setIsClicked(false);
                }}
                variant="light"
              >
                {" "}
                <X size={24} className="bg-black text-white rounded-full p-1" />
              </Button>

              <Button isIconOnly variant="light">
                <Check
                  size={24}
                  className="bg-black text-white rounded-full p-1"
                />
              </Button>

              <>
                <ModalButton
                  Trigger={
                    <Info
                      size={24}
                      className="bg-black text-white rounded-full p-1"
                    />
                  }
                >
                  <LinearImageCarousel />
                </ModalButton>
              </>
            </div>
          </div>
          <div
            //  style={{ rotate: `${-rotateDegConst * index}deg` }}
            className="translate-x-[2rem] right w-0 group-hover:block hidden text-stone-300 font-bold "
          >
            <ChevronsLeft size={100} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CarouselItemLR;
