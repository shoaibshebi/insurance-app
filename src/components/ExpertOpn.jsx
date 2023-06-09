import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import styles from "../styles";
import womanCeoImg from "../assets/woman cceoo.jpeg";
import { fadeIn, staggerContainer } from "../utils/motion";
import SlideShow from "../reusable/SlideShow";

export default function ExpertOpn() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings} px-16 py-32 flex flex-row  gap-4 gap-y-8 relative h-[70vh] `}
    >
      <div className={`w-2/3 `}>
        <SlideShow />
      </div>
      <motion.div
        variants={fadeIn("rt", "spring", 0.2, 2)}
        className={` w-1/3 flex justify-around flex-row p-16  `}
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          className="w-[50px] h-[50px]  flex justify-center items-center"
        >
          <FontAwesomeIcon
            icon={faAsterisk}
            className="text-center font-noraml text-white text-[40px]"
          />
        </motion.span>
        <div class=" text-[100px] font-bold ml-2">
          <h1 class=" leading-[90px] ">Our experts say</h1>
        </div>
      </motion.div>
    </motion.section>
  );
}
