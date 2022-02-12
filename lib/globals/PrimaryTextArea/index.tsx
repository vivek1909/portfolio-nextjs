import { ChangeEvent, FC, TextareaHTMLAttributes } from "react";
import classes from "./PrimaryTextArea.module.css";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const PrimaryTextArea: FC<Props> = ({
  id,
  name,
  label,
  placeholder,
  ...props
}) => {
  return (
    <div className={classes.root}>
      <label htmlFor={id}>{label}</label>
      <textarea
        autoComplete={"off"}
        placeholder={placeholder}
        name={name}
        id={id}
        rows={5}
        {...props}
      />
    </div>
  );
};
