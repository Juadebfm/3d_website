import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[1px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center m-auto w-full">
          <h1
            className={`${styles.heroHeadText} text-white text-center flex flex-col lg:flex-row w-full md:w-auto items-center justify-center gap-6`}
          >
            <span className="text-secondary">Hi,</span> Iʻm Juadeb Gabriel
            Adebowale
          </h1>
          <p
            className={`text-[17px] leading-[30px] mt-6 text-white-100 w-full md:w-[75%] text-center`}
          >
            I am a front-end web developer and software development mentor. I
            help businesses create accessible and inclusive websites that meet
            the needs of all users. I use my skills and experience to make the
            web a more accessible place for everyone.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-start gap-8 mt-12">
            <button
              type="submit"
              className="border-[1px] border-white py-3 px-6 rounded-md hover:bg-secondary hover:text-primary duration-200 transition-all"
            >
              <a
                href="https://juadebmantra.netlify.app"
                className="text-[16px]"
              >
                My Mantra
              </a>
            </button>
            <button
              type="submit"
              className="border-[1px] border-white py-3 px-6 rounded-md hover:bg-secondary hover:text-primary duration-200 transition-all"
            >
              <a
                href="https://drive.google.com/file/d/1ZTnD33Is7kFTN8gnlnvIbafnAIA-Pd6E/view?usp=sharing"
                download={true}
                className="text-[16px]"
              >
                Download CV
              </a>
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
      <div className="hidden absolute xs:bottom-10 bottom-32 w-full md:flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 2.5,
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
