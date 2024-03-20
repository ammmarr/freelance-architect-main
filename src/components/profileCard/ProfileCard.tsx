import profileImg from "../../assets/370233704_357378639996588_1615738251909673700_n.jpg";
import useGetData from "../../hooks/useGetData";
import Links from "../shared/links/Links";
import style from "./index.module.scss";
const ProfileCard = ({ data }: any) => {
  const profile_image = data?.attributes?.profile_image?.data.attributes.url;
  return (
    <div className={style.container}>
      <div className={style.top}>
        <img src={`${profile_image}`} />
      </div>
      <h2>Mostafa Nasser</h2>
      <Links
        facebook={data?.attributes.facebook}
        instagram={data?.attributes.instagram}
        linkedIn={data?.attributes.linkedIn}
      />
    </div>
  );
};

export default ProfileCard;
