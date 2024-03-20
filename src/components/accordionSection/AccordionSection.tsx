import Accordion from "./accordion/Accordion";
import style from "./index.module.scss";
const AccordionSection = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.leftContainer}>
          <h1>ARRAY OF SERVICES AND SKILLS</h1>
          <p>
            Combining creativity and architectural prowess, I specialize in
            crafting spaces that marry innovation with practicality, offering
            designs that captivate and inspire.
          </p>
        </div>
        <div className={style.rightContainer}>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
