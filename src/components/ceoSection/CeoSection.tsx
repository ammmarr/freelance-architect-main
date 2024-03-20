import style from "./index.module.scss";
import leftImg from "../../assets/subBG.jpeg";
import ProfileCard from "../profileCard/ProfileCard";
import useGetData from "../../hooks/useGetData";
const CeoSection = ({ data }: any) => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src={leftImg} />
      </div>
      <div className={style.right}>
        <ProfileCard data={data} />
      </div>
    </div>
  );
};

export default CeoSection;
