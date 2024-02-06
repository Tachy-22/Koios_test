"use client";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import InnerCircleItem from "./components/InnerCircleItem";
import { BeefIcon, SaladIcon, SoupIcon, WineIcon } from "lucide-react";
import CarouselItemsContainer from "./components/carousel-item-container";
import CarouselItemLR from "./components/carousel-item-lr";
import CarouselItem from "./components/carousel-item";

const CircularCarousel = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: divRef });
  const rotateDeg = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotateDegSmall = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const [isFetching, setIsFetching] = useState(false);
  const [myData, setData] = useState([]);
  console.log({ myData });

  const getDummy = useCallback(async (skip: number) => {
    setIsFetching(true);
    try {
      const result = await fetch(
        `https://dummyjson.com/recipes?limit=6&&skip=${skip}`
      ).then((res) => {
        return res.json();
      });
      setData(result.recipes);
      setIsFetching(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getDummy(0);
  }, [getDummy]);

  useEffect(() => {
    const scrollToMiddle = () => {
      if (divRef.current) {
        divRef.current.scrollTo({
          top: divRef.current.scrollHeight / 2,
          behavior: "smooth",
        });
      }
    };

    // Delay for 3 seconds before scrolling to the middle
    const delayTimeout = setTimeout(scrollToMiddle, 1000);

    return () => clearTimeout(delayTimeout); // Clear the timeout on component unmount
  }, []);

  const scrollToTopThird = useCallback((ref: any, i: number) => {
    if (ref.current) {
      console.log("test");
      const targetScroll = ref.current.scrollHeight / (i + 1);
      ref.current.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  }, []);

  const rotateDegConst = 180 / myData.length;

  console.log({ myData, rotateDegConst }, "isFetching", isFetching);

  const carouselMenu = [WineIcon, BeefIcon, SoupIcon, SaladIcon];
  return (
    <div
      ref={divRef}
      style={{ overscrollBehavior: "none" }}
      className=" relative border w-full h-full  border-blue bg-gradient-to-br from-orange-950 via-orange-900 to-orange-300 rounded-xl overflow-auto  overflow-x-clip sm:block  hidden"
    >
      <InnerCircleItem scale={`scale-[50%]`}>
        <div className="border-4   h-[90vh] w-[90vh] rounded-full"></div>
      </InnerCircleItem>
      <InnerCircleItem scale={`scale-[54%]`}>
        <div className="relative w-[90vh] z-50  h-[90vh]  flex justify-start   rounded-full  items-center rotate-[210deg] border-4 ">
          {carouselMenu?.map((Icon, i) => {
            console.log(i);
            return (
              <div
                onClick={() => {
                  console.log(i);
                  getDummy(i * 10);
                  scrollToTopThird(divRef, i);
                }}
                style={{ rotate: `${40 * i}deg` }}
                key={i}
                className="flex flex-col h-full w-fit mx-auto justify-end items-center absolute bg-rd-500   top-0  right-0 left-0 bottom-0 translate-y-[2.1rem]"
              >
                <motion.div className="  min-h-[6rem] max-h-[6rem]  max-w-[6rem] w-[6rem] min-w-[6rem]   flex justify-center items-center rounded-full  ">
                  <div
                    style={{ rotate: `${-40 * i}deg` }}
                    className=" w-full h-full rounded-full bg-white  p-4 "
                  >
                    <div className=" rounded-full rotate-[150deg]  z-50 hover:cursor-pointer  text-black border h-full w-full">
                      <Icon className="w-full h-full text-stone-950" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </InnerCircleItem>
      <InnerCircleItem scale={`scale-[40%]`}>
        <div className="relative w-[90vh] hover:cursor-pointer bg-white   h-[90vh]  flex justify-end z-50  rounded-full  items-center rotate-[128deg ">
          <Image
            src={`/chef.png`}
            width={1920}
            height={1571}
            alt={`chef-logo`}
            className={`w-full h-full  rounded-full scale-[70%] translate-x-[21%]`}
          />
        </div>
      </InnerCircleItem>
      <CarouselItemsContainer rotateDeg={rotateDeg}>
        {myData?.map((recipe, i) => {
          return (
            <CarouselItem key={i} index={i} rotateDegConst={rotateDegConst}>
              <CarouselItemLR
                recipe={recipe}
                index={i}
                rotateDegConst={rotateDegConst}
                rotateDegSmall={rotateDegSmall}
                clickable={true}
              >
                <Image
                  src={recipe?.image}
                  width={128}
                  height={128}
                  alt={recipe?.name}
                  className={` rounded-full z-0 hover:scale-[110%] duration-500 transition-all bg-white ${
                    isFetching ? "opacity-0" : "opacity-100"
                  }`}
                />
              </CarouselItemLR>

              <div className=" w-full " />
              <CarouselItemLR
                recipe={recipe}
                index={i}
                rotateDegConst={rotateDegConst}
                rotateDegSmall={rotateDegSmall}
                clickable={true}
              >
                <Image
                  src={recipe?.image}
                  width={128}
                  height={128}
                  alt={recipe?.name}
                  className={` rounded-full z-0 hover:scale-[110%] duration-500 transition-all bg-white ${
                    isFetching ? "opacity-0" : "opacity-100"
                  }`}
                />
              </CarouselItemLR>
            </CarouselItem>
          );
        })}
      </CarouselItemsContainer>
    </div>
  );
};

export default CircularCarousel;
