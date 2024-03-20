import Markdown from "markdown-to-jsx";
import projects from "../../projectsData";
import style from "./index.module.scss";
const ProjectDetailsHeroSection = ({ data }: any) => {
  const projectImages = data.project_images.data
    ? data.project_images.data?.map((each: any, i: number) => (
        <img src={`${each.attributes.url}`} key={i} />
      ))
    : null;
  const projectVideos = data.project_videos.data
    ? data.project_videos.data.map((each: any) => (
        <iframe
          width={"100%"}
          height={600}
          src={`${each.attributes.url}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ))
    : null;

  return (
    <div className={style.container}>
      <h1>Project - "{data.name}"</h1>
      <div className={style.imagesContainer}>
        {projectVideos && projectVideos}
        {projectImages && projectImages}
      </div>

      <div className={style.textContainer}>
        <div className={style.header}>
          <h3>{data.title} </h3>
          <div className={style.info}>
            <h6>
              <span>ARCHITECTS :</span>
              {data.architects}
            </h6>
            <h6>
              <span>LOCATION : </span>
              {data.location}
            </h6>
            <h6>
              <span>CATEGORY : </span>
              {data.category}
            </h6>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className={style.content}
        />
      </div>
    </div>
  );
};

export default ProjectDetailsHeroSection;
