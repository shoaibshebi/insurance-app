import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";

import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

export default function Calculate() {
  const [cat, setCat] = useState("Travel");
  const Cats = ["Travel", "Health", "CSCO", "Mortgage", "Fire"];
  const OtherInfo = [
    {
      title: "Insurance services",
      items: [
        "Medical expenses",
        "Family health insurance",
        "Vehicle damage",
        "Property loss",
        "Fire",
      ],
    },
    {
      title: "Company",
      items: ["About us", "Career", "Help", "FAQ", "Blog"],
    },
    {
      title: "Bonus",
      items: ["Gift certificate", "Affiliate Program", "Trainings"],
    },
  ];
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings}  relative z-10 flex flex-row justify-center items-center gap-32 h-[70vh]`}
    >
      <div class="w-1/2">
        <motion.h1
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          class="text-[100px] leading-[90px] font-bold"
        >
          Need numbers ?{" "}
        </motion.h1>
        <div className="flex justify-start flex-row gap-4 mt-16">
          {Cats.map((item, i) => (
            <motion.div
              key={item}
              variants={zoomIn(0.2 * i, 1)}
              className={`${styles.flexCenter} ${
                cat === item
                  ? "text-[#0D1C30] bg-[#ffffff] "
                  : "text-white bg-[#0D1C30]"
              } rounded-[30px]  p-2 px-8 mr-2 cursor-pointer`}
              onClick={() => setCat(item)}
            >
              {item}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-row justify-start gap-4 my-8 ">
          <div className="flex flex-col justify-start w-full">
            <p className="text-white text-[14px] ">Enter the country</p>
            <input
              type="text"
              placeholder="Australia"
              className="text-[#fff] bg-[#0D1C30] rounded-[30px]  py-4 px-8 mt-2"
            />
          </div>
          <div className="flex flex-col justify-start w-full">
            <p className="text-white text-[14px] ">Enter the country</p>
            <div className="relative">
              <input
                type="text"
                placeholder="11 Apr - 20 Apr"
                className="text-[#fff] bg-[#0D1C30] rounded-[30px]  py-4 px-8 mt-2 w-full"
              />
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="absolute right-6 bottom-5 text-center font-noraml text-2xl text-[#838C99] text-[30px]"
              />
            </div>
          </div>
        </div>
        <motion.button
          variants={zoomIn(1, 0.5)}
          type="button"
          className="  text-center h-fit p-4 w-full bg-pink rounded-[32px] "
        >
          <span className="font-normal text-[16px] text-[#0b111b]">
            Calculate
          </span>
        </motion.button>
      </div>
      <div class="w-1/2 px-32">
        {OtherInfo.map((item, i) => (
          <div className={`flex flex-col py-12`}>
            <motion.p
              variants={fadeIn("right", "spring", i === 0 ? 0.5 : 0.4 * i, 1)}
              className="text-white  text-[24px] "
            >
              {item.title}
            </motion.p>
            <div className="flex flex-row flex-wrap mt-2">
              {item.items.map((_item, ind) => (
                <motion.p
                  variants={zoomIn(i === 2 ? 0.6 : 0.6 * ind, 1)}
                  className="text-white text-[14px] mr-8 text-[#e6e3e3af] font-sans cursor-pointer  "
                >
                  {_item}
                </motion.p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
