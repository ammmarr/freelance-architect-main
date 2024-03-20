import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import img from "../../../assets/sliderImg1.jpg";
import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
const ProjectCard = ({ data, number }: any) => {
  const navigate = useNavigate();
  const coverImage = `${data.attributes.main_thumbnail_image.data.attributes.url}`;
  return (
    <div
      className={style.container}
      onClick={() => navigate(`project/${data.id}`)}
      key={data.id}
    >
      <img src={coverImage} />
      <div className={style.textContainer}>
        <div className={style.textWrapper}>
          <h2>{data.attributes.name}</h2>
          <TrendingFlatIcon className={style.icon} color="inherit" />
        </div>
        <div className={style.number}>0{number + 1}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
