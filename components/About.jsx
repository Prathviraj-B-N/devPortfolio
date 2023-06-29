import React from "react";

const About = () => {

  return (
    <section
      className={`padding max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id="about" />
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify indent-11 py-5">
        I{`'`}m a 23-year-old{" "}
        <span className="myunderline">Computer Science Engineer</span> with a
        passion for full-stack development. After successfully clearing the GATE
        exam in 2022, I embarked on a journey of knowledge and growth at{" "}
        <span className="myunderline">IIIT Bangalore</span>, pursuing my{" "}
        <span className="myunderline">Masters in Computer Science</span>. During
        my academic journey and other experiences, I have had the opportunity to
        work on diverse projects, honing my skills in various programming
        languages, frameworks, and technologies. My goal is to leverage this
        expertise to deliver tailored solutions that not only meet but exceed
        your expectations.
      </p>
    </section>
  );
};

export default About;
