"use client";

import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../utils/motion";
import { blogs } from "../constants";

const BlogCard = ({
  index,
  name,
  description,
  tags,
  blogLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} onClick={() => window.open(blogLink, "_blank")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
      >
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>

  );
};

const Blogs = () => {
  return (
    <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.25 }}
    className={`padding max-w-7xl mx-auto relative z-0`}
  >
    <span className='hash-span' id="project">
      &nbsp;
    </span>

      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
        <h2 className="sectionHeadText">Blogs.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following are my Blogs.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {blogs.map((blog, index) => (
          <BlogCard key={`project-${index}`} index={index} {...blog} />
        ))}
      </div>
    </motion.section>
  );
};

export default Blogs;
