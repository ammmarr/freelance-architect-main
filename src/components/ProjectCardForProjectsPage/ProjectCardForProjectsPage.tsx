import React from "react";
import style from "./index.module.scss";
import demo from "../../assets/sliderImg2.jpg";
import { useNavigate } from "react-router-dom";
const ProjectCardForProjectsPage = ({ data, number }: any) => {
  const navigate = useNavigate();
  const coverImage = `${data.attributes.main_thumbnail_image.data.attributes.url}`;
  const name = data.attributes.name;
  const category = data.attributes.category;
  return (
    <div
      className={style.container}
      onClick={() => navigate(`/project/${number}`)}
    >
      <img src={coverImage} />
      <div className={style.hoverText}>
        {" "}
        <h3>{name}</h3>
        <h4>{category}</h4>
      </div>
    </div>
  );
};

export default ProjectCardForProjectsPage;
