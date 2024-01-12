import Image from "next/image";
import Footer from "./Footer";
import { allerta_Stencil } from "./Hero";

const CTA = () => {
  return (
    <div
      // style={{
      //   background: "url(/gear.png)",
      //   backgroundSize: "cover",
      // }}
      className="w-full md:h-full h-[50%] relative flex "
    >
      <Image
        src="/gear.png"
        width={1440}
        height={1173}
        alt={"gear"}
        className="w-full md:h-full h-[50%] aspect-video"
      />
      <div className="absolute top-0 left-0 w-full  mx-auto  h-full   gap-[3rem] text-white  pt-[30rem] flex flex-col justify-center text-center items-cnter md:px-[10%] px-[5%]">
        <h2
          className={`${allerta_Stencil.className} text-3xl md:text-5xl  font-semibold text-yellow-400 flex flex-col gap-3`}
        >
          Lorem ipsum dolor sit
          <span className="text-gray-400 text-base text-center capitalize">
            Lorem ipsum dolor sit amet consectetur. Nunc blandit id pellentesque{" "}
          </span>
        </h2>
        <p className="max-w-6xl md:text-lg  mx-auto">
          Lorem ipsum dolor sit amet consectetur. Arcu nisl mi adipiscing congue
          in et. Mi ullamcorper dui platea hendrerit nibh nec pharetra ut
          facilisis. Sit sit euismod pellentesque mauris. Nec aliquam ac gravida
          turpis neque ac praesent. Suspendisse non vulputate egestas suscipit
          accumsan ultrices mattis tristique sapien. Nunc enim malesuada turpis
          interdum. Nibh semper arcu leo tincidunt dui porta.
        </p>
        <p className="max-w-6xl md:text-lg  mx-auto">
          Eget orci adipiscing tortor eget sagittis. Elementum rhoncus eleifend
          eu in bibendum tellus ullamcorper. Placerat tempor eu pharetra quam
          eget sit. A dictum pretium volutpat fermentum nunc id. Integer vitae
          parturient aliquet tincidunt.
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default CTA;
