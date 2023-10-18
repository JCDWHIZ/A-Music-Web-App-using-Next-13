"use client";
import React from "react";
import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

function Player() {
  return (
    <div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: "false", amount: 0.1 }}
        className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-48"
      >
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          {/* asjdhasdhsdasdas */}

          <div className="hidden w-[300px] xl:flex items-center gap-x-4">
            <div className="relative w-16 h-16">
              <Image
                src={"/assets/player/avatar.jpg"}
                alt="player"
                fill
                priority
                className="rounded-full"
              />
            </div>
            <div className="leading-none">
              <div className="text-lg font-medium">Davido</div>
              <div className="text-sm font-light">Holy Ground</div>
            </div>
          </div>

          {/*  */}

          <div className="w-full max-w-4xl">
            <AudioPlayer
              loop
              preload="none"
              color="#333"
              volume={40}
              volumePlacement="top"
              src="/assets/HolyGround.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
                width: "100%",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Player;
