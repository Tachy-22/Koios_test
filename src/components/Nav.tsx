import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import ProgressBar from "./ui/ProgressBar";

const Nav = () => {
  return (
    <div className="sticky w-full  top-0 py-1 z-10 backdrop-brightness-[10%] backdrop-opacity-[70%] backdrop-blur  bg-gradient-to-t from-transparent to-[#1A1A1A]  text-white ">
      <div className="max-w-7xl px-[2rem] flex justify-between mx-auto">
        <Logo size={`w-[5rem] h-[5rem]`} />
        <Menu />
        <MobileMenu />
      </div>
      <ProgressBar />
    </div>
  );
};

export default Nav;
