import React from "react";
import ReactGA from "react-ga";

import Tilt from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  ReactGA.event({
    category: "Service",
    action: "Click",
  });

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, pseed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>OVERVIEW</p>
        <h2 className={styles.sectionHeadText}>What i do !</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-white text-[17px] max-w-full leading-[30px]"
      >
        <span className="block text-secondary text-[20px] capitalize mb-2">
          Welcome to the world of problem-solving!
        </span>
        As a front-end web developer and software development coach, I have
        spent the last three years solving tech-related problems for
        organizations, brands, and institutions. I understand the complexity and
        time constraints you may face in today's fast-paced digital environment.
        With my knowledge and experience, I can provide you with effective
        solutions to your technology-related challenges. Whether you need
        assistance with web design, web development, or software development, I
        have the expertise to take your business to the next level. I specialize
        in developing user-friendly websites that engage your audience and offer
        top-tier software development guidance and advice.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
