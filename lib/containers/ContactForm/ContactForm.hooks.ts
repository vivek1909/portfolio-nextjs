import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { FormValues } from "../../../types/contact";

interface ContactFormHook {
  values: FormValues;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
}

export const useContactForm = (): ContactFormHook => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange: ContactFormHook["onChange"] = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit: ContactFormHook["onSubmit"] = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { status } = await axios.post("/api/send", values);

      if (status === 200) {
        setValues({
          name: "",
          email: "",
          message: "",
        });

        toast("Message received, I'll get back to you shortly :)", {
          type: "success",
        });
      }
    } catch (error) {
      toast("Oops! Something went wrong!", {
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    values,
    onChange,
    onSubmit,
    isLoading,
  };
};
