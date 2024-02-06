"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useState } from "react";

const LinearImageCarousel = () => {
  const dummyArray = [
    "/carouselImage1.webp",
    "/carouselImage2.webp",
    "/carouselImage3.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = useCallback(() => {
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dummyArray.length);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 250);
  }, [dummyArray.length]);

  const prevImage = useCallback(() => {
    setIsTransitioning(true);
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + dummyArray.length) % dummyArray.length
    );
    setTimeout(() => {
      setIsTransitioning(false);
    }, 250);
  }, [dummyArray.length]);

  const handlePaginationScroll = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrentImageIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 250);
  }, []);

  return (
    <div className="p-2 gap-4 bg-white w-full h-full   mx-auto  flex flex-col  justify-between items-center">
      <div className=" flex justify-between items-center w-full h-[80%] ">
        <button
          className="hover:bg-black/5 rounded-md p-1 text-stone-600 "
          onClick={prevImage}
        >
          <ChevronLeft />
        </button>
        <div
          className={` flex justify-center h-[40vh]   items-center overflow-hidden transition-all duration-250 rounded-full  ${
            isTransitioning ? "opacity-50 scale-50" : "opacity-100 scale-90  "
          } `}
        >
          {!isTransitioning && (
            <Image
              height={128}
              width={128}
              src={dummyArray[currentImageIndex]}
              alt={`Image ${currentImageIndex}`}
              className="h-full w-full "
            />
          )}
        </div>

        <button
          onClick={nextImage}
          className="hover:bg-black/5 rounded-md p-1 text-stone-600 "
        >
          <ChevronRight />
        </button>
      </div>
      <div className="flex  w-full gap-2 justify-center h-[20%] items-center">
        {dummyArray.map((item, index) => {
          return (
            <>
              <button
                onClick={() => {
                  handlePaginationScroll(index);
                }}
                key={index}
                className={`${
                  currentImageIndex === index
                    ? " border-stone-500"
                    : "border-transparent"
                } w-[4rem] h-[4rem] overflow-hidden rounded-md p-1 border  flex justify-center items-center`}
              >
                <Image
                  height={128}
                  width={128}
                  src={item}
                  alt={`Image ${item}`}
                  className="rounded-sm mx-auto object-center w-full h-full"
                />
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LinearImageCarousel;
