import { motion } from "framer-motion";

import styles from "../styles";
import carImg from "../assets/carImg.webp";
import cotageImg from "../assets/cotage.jpg";
import medicineImg from "../assets/medicine.jpeg";
import houseImg from "../assets/house Img.webp";
import lifeTubeImg from "../assets/life tube.jpeg";
import { staggerContainer, zoomIn } from "../utils/motion";
import CapsuleComp from "../reusable/CapsuleComp";

export default function BestChoice() {
  const choiseImgs = [
    {
      name: "Vehicle damage",
      img: carImg,
    },
    {
      name: "Mortgage insurance",
      img: cotageImg,
    },
    {
      name: "Medical expenses",
      img: medicineImg,
    },
  ];

  return (
    <motion.section
      id="best-choice"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings} flex flex-col gap-4 gap-y-8 relative `}
    >
      <div className={`flex justify-around md:flex-row flex-col  h-[400px] `}>
        <motion.div
          variants={zoomIn(0.3, 1)}
          className=" relative  h-full w-[700px]"
        >
          <img
            src={houseImg}
            alt={houseImg}
            className=" absolute w-full h-full  rounded-[42px] object-cover z-0"
          />
          <div
            className={`${styles.flexCenter} absolute bottom-4 left-4  rounded-[30px] bg-[#0b111b] z-10 p-4 px-8`}
          >
            {"Home insurance"}
          </div>
        </motion.div>
        <motion.div variants={zoomIn(0.1, 1)} className=" relative  h-full ">
          <CapsuleComp image={lifeTubeImg} />
        </motion.div>
        <motion.div
          variants={zoomIn(0.9, 1)}
          className="relative h-full w-[400px] p-8 bg-[#0D1C30] rounded-[30px]  "
        >
          <motion.h1
            variants={zoomIn(1.1, 1)}
            className="mt-[26px] font-bold text-[24px] leading-[16.24px] text-white"
          >
            Best Choice
          </motion.h1>
          <motion.p
            variants={zoomIn(1.3, 1)}
            className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[22.4px] font-sans tracking-tight"
          >
            Not all insurance are the same. That's why agency know that your
            unsurace should be cusotmized to fit your situation.
          </motion.p>
          <motion.button
            variants={zoomIn(1.5, 1)}
            type="button"
            className="absolute bottom-6 left-10  text-center h-fit p-4 w-10/12 bg-pink rounded-[32px] "
          >
            <span className="font-normal text-[16px] text-[#0b111b]">
              View all services
            </span>
          </motion.button>
        </motion.div>
      </div>
      <div className={`flex justify-around md:flex-row flex-col `}>
        {choiseImgs.map((item, i) => (
          <motion.div
            variants={zoomIn(0.3 * i, 1)}
            className="relative min-w-[170px] md:w-[450px] h-[300px]"
          >
            <img
              src={item.img}
              alt={item.name}
              className=" absolute w-full h-full  rounded-[42px] object-cover z-0"
            />
            <div
              className={`${styles.flexCenter} absolute bottom-4 left-4  rounded-[30px] bg-[#0b111b] z-10 p-4 px-8`}
            >
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
