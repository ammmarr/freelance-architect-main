import style from "./index.module.scss";
const ProjectCardForProjectsPageSkeleton = ({ data, number }: any) => {
  return (
    <div className={style.container}>
      <div className={style.divImg} />
      <div className={style.hoverText}>
        {" "}
        <h3></h3>
        <h4></h4>
      </div>
    </div>
  );
};

export default ProjectCardForProjectsPageSkeleton;
