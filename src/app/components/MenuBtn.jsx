import Navcontext from "@/context/Navcontext";
import React from "react";
import { useContext } from "react";

function MenuBtn({ open1, sopen1 }) {
  // const { setIsOpen } = useContext(Navcontext);
  return (
    <div
      onClick={() => {
        sopen1(true);
      }}
      className="group flex flex-col gap-y-2 cursor-pointer xl:hidden group items-end transition-all"
    >
      <div className="w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-4 group-hover:w-7 h-[2px] bg-white"></div>
      <div className="w-7 h-[2px] bg-white transition-all"></div>
    </div>
  );
}

export default MenuBtn;
