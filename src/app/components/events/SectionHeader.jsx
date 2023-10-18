"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../variants";
function SectionHeader({ pretitle, title }) {
  return (
    <section>
      <motion.h3
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pretitle text-center"
      >
        {pretitle}
      </motion.h3>
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="h2 text-center mb-8"
      >
        {title}
      </motion.h2>
    </section>
  );
}

export default SectionHeader;
