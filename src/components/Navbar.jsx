import { faCircleNodes, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { staggerContainer, zoomIn } from "../utils/motion";

export default function Navbar() {
  const nav = ["Home", "Services", "About us", "Blog", "Career"];
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`pt-12 px-16 h-[150px]`}
    >
      <div className="px-16 pt-16  relative w-full ">
        <motion.div
          variants={zoomIn(0.7, 1)}
          className="absolute z-10 bottom-0 bg-gradient-to-b from-[#314f794a]  w-full inset-0 rounded-t-[64px] "
        />
        <nav className={`absolute flex flex-row w-11/12 rounded-t-[64px] `}>
          <motion.div
            variants={zoomIn(0.1, 0.5)}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            class="flex items-center cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faCircleNodes}
              className="text-center font-noraml text-pink text-[30px]"
            />
          </motion.div>
          <ul class="flex items-center justify-center flex-grow">
            {nav.map((item, i) => (
              <motion.li
                variants={zoomIn(0.3 * (i / 2), 1)}
                class="px-4 text-white "
              >
                <a
                  href="#"
                  class={`text-white text-[20px] cursor-pointer hover:text-[#83D7E8]`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          <div class="flex items-center ">
            <motion.button
              variants={zoomIn(0.1, 1)}
              type="button"
              className="flex items-center mr-16 h-fit py-2 px-10 bg-[#83D7E8] rounded-[32px] gap-[12px] mx-2"
            >
              <span className="font-normal text-[16px] text-[#0b111b]">
                Contact us
              </span>
            </motion.button>
            <motion.span variants={zoomIn(0.1, 1)} className="mr-8">
              <FontAwesomeIcon
                icon={faKey}
                rotation={180}
                className="text-center font-noraml text-white text-[20px]"
              />

              <a href="#" class={`text-white ml-2 text-xl`}>
                Login
              </a>
            </motion.span>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}
