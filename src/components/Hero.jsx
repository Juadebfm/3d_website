import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, Iʻm <span className="text-[#915eff]">Juadeb</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, user <br className="sm:block hidden" />
            interfaces, and interactive websites
          </p>
          <div className="flex items-center justify-start gap-8 mt-6">
            <button
              type="submit"
              className="bg-tertiary py-3 px-12 rounded-xl outline-none w-fit text-white font-bold shadow-sm shadow-secondary hover:shadow-md hover:shadow-secondary transition-all duration-200"
            >
              <a href="https://juadebmantra.netlify.app">My Mantra</a>
            </button>
            <button
              type="submit"
              className="bg-tertiary py-3 px-12 rounded-xl outline-none w-fit text-white font-bold shadow-sm shadow-secondary hover:shadow-md hover:shadow-secondary transition-all duration-200"
            >
              <a href="">Fun Projects</a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <br />
        <br />
      </div>
      {/* <ComputersCanvas /> */}
      <br />
      <br />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
