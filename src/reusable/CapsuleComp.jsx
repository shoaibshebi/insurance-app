import { motion } from "framer-motion";

import { zoomIn } from "../utils/motion";

export default function CapsuleComp({ image }) {
  return (
    <motion.div
      variants={zoomIn(0.6, 1)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.25 }}
      className=" relative w-[230px] h-full  rounded-full overflow-hidden inline-block "
    >
      <motion.div
        variants={{
          offscreen: {
            height: "100%",
          },
          onscreen: {
            height: "0%",
            transition: {
              duration: 1,
              delay: 0.5,
            },
          },
        }}
        className="absolute top-0 left-0 h-0 bg-[#0b111b] w-full rounded-full z-20   border-[#0b111b] "
      ></motion.div>
      <motion.img
        viewport={{ once: false, amount: 0.25 }}
        src={image}
        alt="lifeTubeImg"
        className="absolute top-0 z-0 w-full h-full object-cover rounded-full  "
      />
    </motion.div>
  );
}
