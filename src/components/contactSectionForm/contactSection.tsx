import ContactForm from "../ContactForm.Tsx/ContactForm";
import style from "./index.module.scss";
import arch1 from "../../assets/arch1.png";
const ContactSection = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src={arch1} />
      </div>
      <ContactForm />
    </div>
  );
};
export default ContactSection;
