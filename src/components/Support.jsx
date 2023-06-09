import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import womenWithBallon from "../assets/women with balloo.jpeg";
import CapsuleComp from "../reusable/CapsuleComp";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

export default function Support() {
  const SupportWords = ["Support", "at every", "step"];
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings}  relative z-10 flex flex-row justify-center items-center gap-32 h-[90vh]`}
    >
      <div class="w-1/3 font-bold p-16 ">
        {SupportWords.map((item, index) => (
          <motion.h1
            variants={fadeIn("lt", "spring", index * 0.3, 2)}
            class={
              index === 2
                ? "text-[200px] leading-[160px]"
                : `text-[100px] leading-[90px]`
            }
          >
            {item}
          </motion.h1>
        ))}
      </div>
      <div class="w-1/3 py-3">
        {Array(2)
          .fill()
          .map((_, i) => (
            <motion.div
              variants={zoomIn(0.3 * i, 1)}
              className={`${styles.flexStart} flex-col px-6 py-10`}
              key={i}
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
              <p className="flex-2  font-normal text-[18px] text-[#B0B0B0] leading-[22.4px] font-sans tracking-tight mt-4 ">
                Participate in the{" "}
                {i === 0 ? (
                  <span className="underline text-[#83D7E8] cursor-pointer">
                    loyality program
                  </span>
                ) : (
                  "loyality program"
                )}
                . Our Plans are saving policyholders an average of 20% - 60% on
                premiums.
              </p>
            </motion.div>
          ))}
        <motion.div
          variants={zoomIn(0.8, 1)}
          className={`${styles.flexStart} flex-col px-6 mt-20`}
        >
          <button
            type="button"
            className=" text-center  p-4 w-10/12 border-pink border rounded-[32px] "
          >
            <span className="font-normal text-[16px] text-pink">
              Choose a fund
            </span>
          </button>
        </motion.div>
      </div>
      <div className="w-1/3 relative flex items-center justify-center min-w-[170px] max-w-[270px] h-[550px] ">
        <CapsuleComp image={womenWithBallon} />
      </div>
    </motion.section>
  );
}
