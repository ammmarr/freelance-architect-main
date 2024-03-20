// import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ProjectDetailsHeroSection from "../components/projectDetailsHeroSection/ProjectDetailsHeroSection";
// import useGetData from "../hooks/useGetData";
import transition from "../transitions/PageTransitions";
import ProjectDetailsHeroSectionSkeleton from "../components/projectDetailsHeroSectionSkeleton/ProjectDetailsHeroSectionSkeleton";
import { data } from "./Projects";

const Project = () => {
  // const params = useParams();
  // const { data, loading, error } = useGetData(
  //   `${import.meta.env.VITE_DOMAIN}/api/projects/${params.id}?populate=*`
  // );

  return (
    <div>
      {data ? (
        // Code Issue
        <ProjectDetailsHeroSection data={data[0].attributes} />
      ) : (
        <ProjectDetailsHeroSectionSkeleton />
      )}
    </div>
  );
};

export default transition(Project);
