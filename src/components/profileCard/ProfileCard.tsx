import profileImage from "../../assets/profilePic.jpeg";
import Links from "../shared/links/Links";
import style from "./index.module.scss";
const ProfileCard = () => {
  // const profile_image = data?.attributes?.profile_image?.data.attributes.url;
  return (
    <div className={style.container}>
      <div className={style.top}>
        <img src={`${profileImage}`} />
      </div>
      <h2>Mostafa Nasser</h2>
      {/* <Links
        facebook={data?.attributes.facebook}
        instagram={data?.attributes.instagram}
        linkedIn={data?.attributes.linkedIn}
      /> */}
    </div>
  );
};

export default ProfileCard;
