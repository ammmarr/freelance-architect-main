import { useState } from "react";
import style from "./index.module.scss";
import postMessage from "../../hooks/postMessage";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    postMessage(
      `${import.meta.env.VITE_DOMAIN}/api/message-sent-from-users
    `,
      formData
    );
  };
  return (
    <form
      className={style.container}
      onChange={handleFormChange}
      onSubmit={handleSubmit}
      id="targetSection"
    >
      <h2>Contact Us</h2>
      <div className={style.inputContainer}>
        <input type="text" placeholder="Name" name="name" id="name" />
      </div>
      <div className={style.inputContainer}>
        <input type="text" placeholder="Email" name="email" id="email" />
      </div>
      <div className={style.inputContainer}>
        <textarea placeholder="Message" name="message" id="message" />
      </div>
      <button className="button" type="submit">
        <span>Send Message!</span>
      </button>
    </form>
  );
};

export default ContactForm;
