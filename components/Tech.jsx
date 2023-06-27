"use client";

import { technologies } from "../constants";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Tech = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`padding max-w-7xl mx-auto relative z-0`}
    >
    <span className='hash-span' id="skill">
      {``}
    </span>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='relative group md:w-18 w-24 md:h-18 h-24 object-contain rounded-full ' key={technology.name}>
          <Image src={technology.icon} alt={technology.name} height={1024} width={1024} className="rounded-full bg-slate-200 p-5 hover:neon-emerald"/>
          <span className="group-hover:opacity-100 transition-opacity bg-gray-800/10 my-1 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 w-[98px] flex items-center justify-center mx-auto">{technology.name}</span>
        </div>
      ))}
    </div>
    </motion.section>
  );
};

export default Tech;
