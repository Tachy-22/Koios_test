import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./ui/menubar";
import { ChevronRight } from "lucide-react";

const Menu = () => {
  const menuItems = [
    {
      triggerText: "Engineering",
      content: [
        { linkText: "Engineering Link 1" },
        { linkText: "Engineering Link 2" },
      ],
    },
    {
      triggerText: "Software",
      content: [
        { linkText: "Software Link 1" },
        { linkText: "Software Link 2" },
      ],
    },
    {
      triggerText: "Edu-tech",
      content: [
        { linkText: "Edu-tech Link 1" },
        { linkText: "Edu-tech Link 2" },
      ],
    },
  ];

  return (
    <>
      <NavigationMenu className="bg-transparent md:flex hidden ">
        <NavigationMenuList className="flex gap-2">
          {menuItems.map((menuItem, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger className="bg-transparent">
                {menuItem.triggerText}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2 min-w-[30rem] flex flex-col md:gap-2">
                {menuItem.content.map((contentItem, contentIndex) => (
                  <NavigationMenuLink
                    className="hover:underline underline-offset-4 cursor-pointer w-full"
                    key={contentIndex}
                  >
                    {contentItem.linkText}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <button className=" hover:bg-white/40 rounded-3xl transition-colors duration-400 px-3 py-2">
              About us
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button className="rounded-3xl flex items-center bg-yellow-500 hover:brightness-90 text-black px-3 py-2 gap-1">
              <span className="">Contact us</span> <ChevronRight size={16} />
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Menu;
