import { Allerta_Stencil } from "next/font/google";
export const allerta_Stencil = Allerta_Stencil({
  subsets: ["latin"],
  weight: "400",
});
import AnimatedText from "./ui/AnimatedText";

const Hero = () => {
  return (
    <div
      className="w-full -mt-[5rem] h-full flex flex-col justify-center items-center itext-center  "
      style={{
        background: "url(/teseract-pattern.png)",
        backgroundSize: "cover",
      }}
    >
      <div className=" w-full h-full backdrop-brightness-[10%] backdrop-opacity-[70%] py-[14rem] relative   flex flex-col justify-center items-center text-center">
        <AnimatedText
          el="h1"
          text={[" Implementing", " Your ideas to Reality"]}
          className={`${allerta_Stencil.className} bg-clip-text fill-transparent bg-cover  bg-gradient-to-r from-yellow-500 from-[10%]  font-extrabold via-blue-500 tracking-tighter to-white text-4xl md:text-7xl w-fit leading-[3rem] md:leading-[5rem]  `}
          once
        />
        <AnimatedText
          repeatDelay={10000}
          text="Endless Solutions, One Destination"
          el="p"
          className="text-white py-6"
        />

        <div className="h-[10rem] w-full bg-gradient-to-b from-transparent  to-[#181818]  absolute bottom-0"></div>
      </div>
    </div>
  );
};

export default Hero;
