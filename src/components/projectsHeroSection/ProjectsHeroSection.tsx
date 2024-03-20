import projects from "../../projectsData";
import ProjectCardForProjectsPage from "../ProjectCardForProjectsPage/ProjectCardForProjectsPage";
import style from "./index.module.scss";
export const ProjectsHeroSection = ({ data }: any) => {
  return (
    <div className={style.container}>
      <h1>Latest Projects</h1>
      <div className={style.projectsContainer}>
        {data.map((each: any, i: any) => (
          <ProjectCardForProjectsPage data={each} key={i} number={each.id} />
        ))}
      </div>
    </div>
  );
};
