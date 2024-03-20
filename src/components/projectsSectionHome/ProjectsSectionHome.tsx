import useGetData from "../../hooks/useGetData";
import projects from "../../projectsData";
import ProjectCard from "../ProjectCards/ProjectForHome/ProjectCard";
import style from "./index.module.scss";

const ProjectsSectionHome = ({ data }: any) => {
  return (
    <>
      <div className={style.projectsRow}>
        {data &&
          data.map((each: any, i: number) => (
            <ProjectCard data={each} key={i} number={i} />
          ))}
      </div>
    </>
  );
};

export default ProjectsSectionHome;
