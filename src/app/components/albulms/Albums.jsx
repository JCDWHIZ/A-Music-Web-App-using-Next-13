"use client";
import React from "react";
import AlbulmSlider from "./AlbulmSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
import SectionHeader from "../events/SectionHeader";

function Albums() {
  return (
    <section id="discography">
      <div className="container mx-auto">
        <SectionHeader pretitle={"Discography"} title={"Popular Albums"} />
        {/* jcnvjknck */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AlbulmSlider />
        </motion.div>
      </div>
    </section>
  );
}

export default Albums;
