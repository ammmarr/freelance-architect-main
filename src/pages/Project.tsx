// import { useParams } from "react-router-dom";
import ProjectDetailsHeroSection from "../components/projectDetailsHeroSection/ProjectDetailsHeroSection";
// import useGetData from "../hooks/useGetData";
import { useParams } from "react-router-dom";
import ProjectDetailsHeroSectionSkeleton from "../components/projectDetailsHeroSectionSkeleton/ProjectDetailsHeroSectionSkeleton";
import transition from "../transitions/PageTransitions";
import { data } from "./Projects";

const Project = () => {
  const params = useParams();
  const projectID: number = params.id - 1;
  // const { data, loading, error } = useGetData(
  //   `${import.meta.env.VITE_DOMAIN}/api/projects/${params.id}?populate=*`
  // );
  console.log(data[projectID].attributes, "att");
  return (
    <div>
      {data ? (
        // Code Issue
        <ProjectDetailsHeroSection data={data[projectID].attributes} />
      ) : (
        <ProjectDetailsHeroSectionSkeleton />
      )}
    </div>
  );
};

export default transition(Project);
