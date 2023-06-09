import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, zoomIn } from "../utils/motion";

export default function Footer() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`pb-12 px-16`}
    >
      <section
        className={`${styles.paddings}  relative w-full inset-0 rounded-b-[64px] `}
      >
        <div className=" absolute  flex items-center justify-between gap-5 w-11/12">
          <div class="flex items-center">
            <motion.span
              variants={zoomIn(1, 0.3)}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            >
              <FontAwesomeIcon
                icon={faCircleNodes}
                className="text-center font-noraml text-[#ffffff] text-[30px]"
              />
            </motion.span>
            <motion.span
              variants={zoomIn(1.2, 1)}
              className=" text-[20px] text-white mx-8 "
            >
              Darcy's insurance products
            </motion.span>
          </div>

          <motion.span
            variants={zoomIn(1.6, 1)}
            className=" text-[20px] text-white underline cursor-pointer  "
          >
            Privacy Policy
          </motion.span>
        </div>
        <motion.div
          variants={zoomIn(1.8, 1)}
          className="absolute bottom-0 bg-gradient-to-t from-[#314f794a]  w-full inset-0 rounded-b-[64px] "
        />
      </section>
    </motion.div>
  );
}
