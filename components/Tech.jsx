import { technologies } from "../constants";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "@/styles";
import Image from "next/image";


const Tech = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
    <span className='hash-span' id="skill">
      {``}
    </span>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='md:w-18 w-24 md:h-18 h-24 object-contain' key={technology.name}>
          <Image src={technology.icon} height={1024} width={1024} className="rounded-full bg-slate-200 p-5"/>
        </div>
      ))}
    </div>
    </motion.section>
  );
};

export default Tech;
