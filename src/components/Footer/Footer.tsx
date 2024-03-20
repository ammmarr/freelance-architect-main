import Links from "../shared/links/Links";
import style from "./index.module.scss";
import logo from "../../assets/logoo.png";
import useGetData from "../../hooks/useGetData";
const Footer = () => {
  const { data, loading, error } = useGetData(
    `${import.meta.env.VITE_DOMAIN}/api/main-info?populate=*`
  );
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h2>RECOGNIZING THE NEED IS THE PRIMARY CONDITION</h2>
        <p>
          In the world of architectural design, creativity is the compass
          guiding us to innovate. Each blueprint is a canvas awaiting
          inspiration, turning bricks into poetry. Architects are storytellers,
          crafting structures that inspire and stand as timeless monuments to
          human achievement.
        </p>
        <Links
          facebook={data?.attributes?.facebook}
          instagram={data?.attributes?.instagram}
          linkedIn={data?.attributes?.linkedIn}
        />
      </div>
      <div className={style.middle}>
        <img src={logo} />
      </div>
      <div className={style.last}>
        <div className={style.textContainerToAlignItemsStart}>
          <h2>Contact</h2>
          {data?.attributes.contact_number && (
            <span>Number: {data.attributes.contact_number}</span>
          )}
          {data?.attributes.whatsapp_number && (
            <span>Whatsapp: {data.attributes.whatsapp_number} </span>
          )}
          {data?.attributes.email && <span>Email:{data.attributes.email}</span>}
          {data?.attributes.location && (
            <span>Location: {data.attributes.location}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
