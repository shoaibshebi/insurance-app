import { faArrowDownLong, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import ballonImg from "../assets/ballon.jpeg";
import CapsuleComp from "../reusable/CapsuleComp";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

export default function Hero() {
  const Heading = ["Darcy's", "insurance", "products"];
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings}  relative z-10 flex flex-row gap-32`}
    >
      <div class="flex-2 text-[200px] font-bold">
        {Heading.map((item, index) => (
          <motion.h1
            variants={fadeIn("lt", "spring", index * 0.3, 2)}
            className={`leading-[170px]  transition-[flex]  ease-out-flex`}
          >
            {item}
          </motion.h1>
        ))}
      </div>
      <div class="flex-1 py-3 border-t-[#fff]">
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 1)}
          className={`${styles.flexStart} flex-col px-6`}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          >
            <FontAwesomeIcon
              icon={faAsterisk}
              className="text-center font-noraml text-white text-[30px]"
            />
          </motion.span>
          <p className="flex-2  font-normal text-[18px] text-[#B0B0B0] mt-4 leading-[22.4px] font-sans tracking-tight">
            Our{" "}
            <span className="underline text-[#83D7E8] cursor-pointer font-sans">
              plans
            </span>{" "}
            are saving policyholders an average of 20% - 60% on premiums
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0.8, 1)}
          className={`${styles.flexStart} flex-col px-6 mt-20`}
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          >
            <FontAwesomeIcon
              icon={faAsterisk}
              className="text-center font-noraml text-white text-[30px]"
            />
          </motion.span>
          <p className="  font-normal text-[18px] text-[#B0B0B0] leading-[22.4px] font-sans tracking-tight mt-4 ">
            Our plans are saving policyholders an average of 20% - 60% on
            premiums
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 1, 1)}
          className={`${styles.flexStart} flex-col px-6 mt-20`}
        >
          <div
            className={`${styles.flexCenter} w-[50px] h-[100px] rounded-[24px] bg-gradient-to-t from-[#314f794a] cursor-pointer`}
          >
            <a href="#best-choice">
              <FontAwesomeIcon
                icon={faArrowDownLong}
                className="text-center font-noraml text-white text-[30px] "
              />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="flex-1 relative min-w-[170px] max-w-[270px] h-[550px] my-shadow">
        <CapsuleComp image={ballonImg} />
      </div>
    </motion.section>
  );
}
