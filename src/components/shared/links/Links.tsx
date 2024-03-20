import style from "./index.module.scss";
const Links = ({ facebook, instagram, linkedIn }: any) => {
  return (
    <div className={style.container}>
      {linkedIn && (
        <>
          <a href={linkedIn} target="_blank">
            LI
          </a>
          <div className={style.divider} />
        </>
      )}
      {instagram && (
        <a href={instagram} target="_blank">
          IG
        </a>
      )}

      <div className={style.divider} />
      {facebook && (
        <a href={facebook} target="_blank">
          FB
        </a>
      )}
    </div>
  );
};

export default Links;
