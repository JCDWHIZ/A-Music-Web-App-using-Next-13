import Navcontext from "@/context/Navcontext";
import React from "react";
import { useContext } from "react";
import { RiCloseLine } from "react-icons/ri";
import Nav from "./Nav";

function Navmobile({ open1, sopen1 }) {
  // const [{ isOpen, setIsOpen }] = useContext(Navcontext);
  return (
    <div
      className={`${open1 == true ? "right-0" : "right-full"}
     xl:hidden bg-primary fixed w-full top-0 z-20 bottom-0 transition-all duration-500`}
    >
      <div
        onClick={() => sopen1(false)}
        className="absolute right-4 top-5 cursor-pointer"
      >
        <RiCloseLine className="text-5xl" />
      </div>
      <Nav
        containerStyles={
          "flex flex-col text-[30px] uppercase font-bold bg-pink-500/10 h-full items-center justify-center gap-y-8"
        }
      />
    </div>
  );
}

export default Navmobile;
