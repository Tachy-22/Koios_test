import { Instagram, LinkedinIcon } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const menuItems = [
    {
      text: "Engineering",
    },
    {
      text: "Software",
    },
    {
      text: "Edu-tech",
    },
    {
      text: "About Us",
    },
    {
      text: "Careers",
    },
  ];
  return (
    <div className="w-full h-full pt-[10rem] text-sm text-gray-500 flex flex-col items-center justify-start gap-4">
      <Logo size={"w-[5rem] h-[5rem]"} />
      <div className="flex justify-between ">
        {menuItems.slice(0, 3).map((item, id) => {
          return (
            <>
              <a href="/" className="p-3" key={"id"}>
                {item.text}
              </a>
            </>
          );
        })}
      </div>
      <div className="flex justify-between ">
        {menuItems.slice(3, 5).map((item, id) => {
          return (
            <>
              <a href="/" className="p-3" key={"id"}>
                {item.text}
              </a>
            </>
          );
        })}
      </div>
      <footer className="md:flex-row flex flex-col justify-between py-[2rem] md:max-w-7xl xl:w-full mx-auto  gap-[1rem] items-center border-t border-gray-400 w-[90%]">
        <div className="flex gap-2">
          {" "}
          <Instagram />
          <LinkedinIcon />
        </div>
        <div className=""> © 2023 All rights reserved.</div>
        <div className="flex justify-between gap-[1rem] items-center h-full">
          {" "}
          <span className="py-[0.2rem]">Privacy Policy</span>
          <div className=" h-full bg-gray-500 w-[1px] "></div>
          <span className="py-[0.2rem]">Terms of Service</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
