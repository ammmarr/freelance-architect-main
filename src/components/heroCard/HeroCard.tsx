import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import img1 from "../../assets/sliderImg1.jpg";
import img2 from "../../assets/sliderImg2.jpg";
import img3 from "../../assets/sliderImg3.jpg";
import style from "./index.module.scss";
import variants from "../../utils/variants";
// interface HeroCardProps {
//   h1: string;
//   h2: string;
//   h3: string;
//   p: string;
//   bg: string;
// }
const HeroCard = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState("none");

  const heroSectionCardsData = [
    {
      h1: "Experience",
      h2: "& Knowledge",
      h3: "Integrated",
      p: " s",
      bg: img1,
    },
    {
      h1: "Unified experience,",
      h2: " knowledge entwined",
      p: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur ea velit quod totam, iste saepe. Hic,",
      bg: img2,
    },
    {
      h1: "Integrated wisdom, ",
      h2: "fused expertise;",
      p: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur ea velit quod totam, iste saepe. Hic,",
      bg: img3,
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev == heroSectionCardsData.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { h1, h2, h3, p, bg } = heroSectionCardsData[counter];

  return (
    <motion.div
      className={style.container}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 1, ease: "easeOut" }}
      // key={counter}
    >
      <AnimatePresence>
        <motion.div
          className={style.imgContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          key={counter}
        >
          <motion.img src={bg} />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className={style.textContainer}
        variants={{
          hidden: {
            opacity: 0,
            x: 100,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              staggerChildren: 0.5,
              duration: 0.7,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        key={counter}
      >
        <motion.h1
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          {h1}
        </motion.h1>
        <motion.h1
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          {h2}
        </motion.h1>
        <motion.h1
          variants={variants}
          transition={{ delay: 0, ease: "easeIn" }}
        >
          {h3}
        </motion.h1>
        {/* <motion.p variants={variants} transition={{ delay: 0, ease: "easeIn" }}>
          {p}
        </motion.p> */}
      </motion.div>
    </motion.div>
  );
};

export default HeroCard;
