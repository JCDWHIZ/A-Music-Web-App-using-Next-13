"use client";
import React from "react";
import Social from "./Social";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

function Footer() {
  return (
    <footer className="bg-accent section h-[500px] xl:h-auto sm:h-[600px]">
      <div className="container mx-auto flex flex-col items-center gap-y-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link href="#">
            <h2 className="text-[24px] lg:text-[38px] font-semibold leading-tight">
              Jesseugboh@gmail.com
            </h2>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Nav
            containerStyles={
              "flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold "
            }
            linkStyles={"hover:text-primary/80 transition-all text-[14px]"}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Social
            containerStyles={"flex text-[30px] gap-x-8"}
            iconStyles={"hover:text-primary/80 transition-all justify-center "}
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link
            href="#"
            className="relative w-[250px] h-[250px] flex transition-all"
          >
            <Image
              src={"/assets/hero/davidotext.png"}
              fill
              className="object-contain opacity-20"
              alt="logo"
            />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
