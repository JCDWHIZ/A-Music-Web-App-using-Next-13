"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Navmobile from "./Navmobile";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";
import Social from "./Social";

function Header() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ? "bg-[#030315] py-6 transi" : "bg-transparent py-8"
      }`}
    >
      <div className="relative container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* cbc */}
        <Link
          href={"#"}
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          <Image
            src={"/assets/hero/davidotext.png"}
            fill
            className="object-contain opacity-20"
          />
        </Link>
        <Nav containerStyles={"hidden xl:flex items-center gap-x-8"} />
        <Navmobile open1={open} sopen1={setOpen} />
        <div className="absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn open1={open} sopen1={setOpen} />
        </div>
        <Social
          containerStyles="flex text-[24px] gap-x-4"
          iconStyles="hover:text-accent transition-all"
        />
      </div>
    </header>
  );
}

export default Header;
