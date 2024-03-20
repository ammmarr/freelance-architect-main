import { useEffect, useState } from "react";
import HeroCard from "../heroCard/HeroCard";
import style from "./index.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../ProjectCards/ProjectForHome/ProjectCard";
import ProjectsSectionHome from "../projectsSectionHome/ProjectsSectionHome";
import StartWithIdeaSection from "../startWithIdeaSection/StartWithIdeaSection";
import CeoSection from "../ceoSection/CeoSection";

const HeroSection = () => {
  // const [bol, setBol] = useState(false);
  return (
    <div className={style.container}>
      {/* {bol ? (
        <AnimatePresence mode="wait">
          <motion.h1
            key={"s"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ backgroundColor: "black" }}
          >
            true
          </motion.h1>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.h2
            key={"a"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ backgroundColor: "black" }}
          >
            false
          </motion.h2>
        </AnimatePresence>
      )}
      <button
        onClick={() => setBol((prev) => !prev)}
        style={{ backgroundColor: "maroon" }}
      >
        aslmdlk
      </button> */}
      <ProjectsSectionHome />
      <StartWithIdeaSection />
      <CeoSection />
    </div>
  );
};

export default HeroSection;
