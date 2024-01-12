import Image from "next/image";

const Logo = ({ size }: { size: string }) => {
  return (
    <div className="flex gap-2 items-center  ">
      <Image
        src="/Logo.png"
        width={200}
        height={200}
        alt={"Logo"}
        className={size}
      />
      <p className="font-bold uppercase text-md text-white lg:flex hidden pr-2">
        Koios Engineering Solutions
      </p>
    </div>
  );
};

export default Logo;
