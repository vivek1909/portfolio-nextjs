import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import classes from "./PrimaryInput.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const PrimaryInput: FC<Props> = ({
  id,
  name,
  label,
  placeholder,
  type,
  ...props
}) => {
  return (
    <div className={classes.root}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        autoComplete={"off"}
        placeholder={placeholder}
        name={name}
        id={id}
        {...props}
      />
    </div>
  );
};
