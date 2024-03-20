import style from "./index.module.scss";
import stairs from "../../assets/stairs.png";
import Button from "../shared/Button/Button";
import { Link } from "react-scroll";
const StartWithIdeaSection = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <div className={style.textWrapper}>
          <h2>START WITH IDEA</h2>
          <p>
            Architecture, a captivating blend of art and science, unfurls its
            wings from the cocoon of a single idea. Like a delicate seed planted
            in the fertile soil of imagination, it germinates and sprouts,
            weaving a tapestry of form and function. This creative journey
            transcends blueprints and concrete, evolving into structures that
            not only shelter but also resonate with the aspirations and
            ingenuity of their architects. From the initial spark of
            inspiration, architects navigate a labyrinth of design choices,
            material considerations, and spatial configurations, sculpting
            spaces that breathe life into their original vision.
          </p>
          <Link
            activeClass="active"
            to="targetSection"
            spy={true}
            smooth={true}
            offset={-20} // Adjust the offset according to your layout
            duration={500}
          >
            <Button />
          </Link>
        </div>
      </div>
      <div className={style.imgContainer}>
        <img src={stairs} />
      </div>
    </div>
  );
};

export default StartWithIdeaSection;
