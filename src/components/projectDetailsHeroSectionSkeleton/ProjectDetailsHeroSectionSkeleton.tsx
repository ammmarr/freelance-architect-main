import style from "./index.module.scss";
const ProjectDetailsHeroSectionSkeleton = () => {
  return (
    <div className={style.container}>
      <div className={style.cardsContainer}>
        <div className={style.card}>
          <div className={style.hoverText}>
            {" "}
            <h3></h3>
            <h4></h4>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.hoverText}>
            {" "}
            <h3></h3>
            <h4></h4>
          </div>
        </div>{" "}
        <div className={style.card}>
          <div className={style.hoverText}>
            {" "}
            <h3></h3>
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsHeroSectionSkeleton;
