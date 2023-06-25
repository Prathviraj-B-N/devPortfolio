"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TextRunner from "./TextRunner";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto paddingX flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-emerald-300/80" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="h-full flex flex-col items-center w-screen">
          <div className="m-5">
            <Image src="/profile.jpg" alt="Profile Pic" height={500} width={500} className="object-contain rounded-full w-[128px] h-[128px]"/>
          </div>
          <div className="">
            <ul className="text-center opacity-50 tracking-widest mb-10">
              <li>Computer Science Engineer</li>
              <li>MTech @IIIT Bangalore</li>
            </ul>
          </div>
          <TextRunner />
        </div>
      </div>
      <div className="absolute xs:bottom-12 bottom-10 w-full flex flex-col justify-center items-center">
        <a href="https://drive.google.com/file/d/1Fj2b0SzR7ZGK-UDUM6CufzXNG-MrTqC1/view?usp=sharing" target="_blank" className="text-white/70 box sm:text-xl sm:max-w-full max-w-[120px] cursor-pointer hover:text-white/90 transition-colors">Checkout My <span className="myunderline">Resume</span></a>
        <a className="cursor-pointer z-10" href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
