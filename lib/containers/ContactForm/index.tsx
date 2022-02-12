import { FC, HTMLProps, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { PrimaryInput } from "../../globals/PrimaryInput";
import { PrimaryTextArea } from "../../globals/PrimaryTextArea";
import { useContactForm } from "./ContactForm.hooks";
import classes from "./ContactForm.module.css";

export const ContactForm: FC = () => {
  const { values, onChange, onSubmit, isLoading } = useContactForm();

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <ToastContainer />
      <PrimaryInput
        id={"name"}
        name={"name"}
        placeholder={"John Doe"}
        label={"Your Name*"}
        type={"text"}
        value={values.name}
        onChange={onChange}
        required
      />
      <PrimaryInput
        id={"email"}
        name={"email"}
        placeholder={"johndoe@example.com"}
        label={"Your Email*"}
        type={"email"}
        value={values.email}
        onChange={onChange}
        required
      />
      <PrimaryTextArea
        id={"message"}
        name={"message"}
        placeholder={"Your message goes here"}
        label={"Your Message*"}
        value={values.message}
        onChange={onChange}
        required
      />
      <button
        className={classes.submitBtn}
        disabled={isLoading}
        type={"submit"}
      >
        Send Message
      </button>
    </form>
  );
};
