import { useNavigate } from "react-router-dom";
import demo from "../../assets/sliderImg1.jpg";
import getDateInCostumeFormat from "../../utils/getDateInCustomFormat";
import style from "./index.module.scss";
const ProjectsCardForHeroSection = ({ data }: any) => {
  const name = data.attributes.name;
  const image = `${data.attributes.main_thumbnail_image.data.attributes.url}`;
  const { month, day } = getDateInCostumeFormat(
    data.attributes.time_of_completion
  );
  const navigate = useNavigate();
  return (
    <div
      className={style.container}
      onClick={() => navigate(`project/${data.id}`)}
    >
      <div className={style.imageContainer}>
        <img src={image} />
      </div>
      <div className={style.bottomSection}>
        <div className={style.date}>
          <h6>{day}</h6>
          <div className={style.month}>{month}</div>
        </div>
        <h3> {name}</h3>
      </div>
    </div>
  );
};

export default ProjectsCardForHeroSection;
