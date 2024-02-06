"use client";

const InnerCircleItem = ({
  children,
  scale,
}: {
  children: React.ReactNode;
  scale: string;
}) => {
  return (
    <div
      className={` w-min h-min  ${scale} z-50  sticky right-0 top-10   -mt-[100%] -translate-x-[50%] rounded-full  min-w-max `}
    >
      {children}
    </div>
  );
};

export default InnerCircleItem;
