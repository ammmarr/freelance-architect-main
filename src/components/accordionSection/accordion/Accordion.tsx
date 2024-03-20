import { useState } from "react";
import accordionData from "../../../data/accordionData";
import style from "./index.module.scss";
import Hamburger from "hamburger-react";

const Accordion = () => {
  const [open, setIsOpen] = useState(false);
  const [currentActivAcc, setCurrentActivAcc] = useState<number[]>([]);
  function handleAccClick(i: number) {
    if (!currentActivAcc.includes(i)) {
      setCurrentActivAcc((prev) => [...prev, i]);
    } else {
      const removed = [...currentActivAcc].filter((each) => each != i);
      setCurrentActivAcc([...removed]);
    }
  }
  return (
    <div className={style.container}>
      {accordionData.map((item, i) => (
        <div
          className={style.accordionWrapper}
          key={i}
          onClick={() => handleAccClick(i)}
        >
          <div className={style.titleContainer}>
            <h3 className={style.title}>{item.title}</h3>
            <Hamburger
              toggled={currentActivAcc.includes(i)}
              toggle={setIsOpen}
              size={32}
              color="#8e7861 "
            />
          </div>
          <p
            style={
              currentActivAcc.includes(i)
                ? { maxHeight: "9999px", transition: "0.3s all ease" }
                : { maxHeight: "0px" }
            }
            key={i}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
