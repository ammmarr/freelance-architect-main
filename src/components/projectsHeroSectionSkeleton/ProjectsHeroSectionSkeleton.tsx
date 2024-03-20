import ProjectCardForProjectsPageSkeleton from "../ProjectCardForProjectsPageSkeleton/ProjectCardForProjectsPageSkeleton";
import style from "./index.module.scss";
const ProjectsHeroSectionSkeleton = () => {
  return (
    <div className={style.container}>
      <h1>Latest Projects</h1>
      <div className={style.projectsContainer}>
        <ProjectCardForProjectsPageSkeleton />
        <ProjectCardForProjectsPageSkeleton />
        <ProjectCardForProjectsPageSkeleton />
      </div>
    </div>
  );
};
export default ProjectsHeroSectionSkeleton;
