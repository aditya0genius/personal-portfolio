"use client";
import aditya from "@/images/AdityaDp.png"; 
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      > 

        <img src={aditya.src} alt="Aditya Deshmukh" className="rounded-full w-32 h-32 md:w-48 md:h-48" />






        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Aditya Deshmukh
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Full Stack Developer
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
