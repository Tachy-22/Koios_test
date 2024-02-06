"use client"
const CarouselItem = ({
  children,
  rotateDegConst,
  index,
}: {
  children: React.ReactNode;
  rotateDegConst: number;
  index: number;
}) => {
  return (
    <div
      style={{ rotate: `${rotateDegConst * index}deg` }}
      className="flex flex-col w-fit h-full  mx-auto justify-between items-center absolute  top-0  right-0 left-0 bottom-0  "
    >
      {children}
    </div>
  );
};

export default CarouselItem;
