import logo from "../../assets/logoo.png";
import style from "./index.module.scss";
const Footer = () => {
  // const { data, loading, error } = useGetData(
  //   `${import.meta.env.VITE_DOMAIN}/api/main-info?populate=*`
  // );
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
        {/* <Links
          facebook={data?.attributes?.facebook}
          instagram={data?.attributes?.instagram}
          linkedIn={data?.attributes?.linkedIn}
        /> */}
      </div>
      <div className={style.middle}>
        <img src={logo} />
      </div>
      <div className={style.last}>
        <div className={style.textContainerToAlignItemsStart}>
          <h2>Contact</h2>
          <span>Number: +201094492412</span>
          <span>Whatsapp: +201094492412 </span>
          <span>Email: email@email.com</span>
          <span>Location: Ismailia, Egypt</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
