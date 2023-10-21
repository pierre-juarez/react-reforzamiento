import { useState } from "react";

export const useForm = <T extends Object>(form: T) => {
  const [formValues, setFormValues] = useState(form);

  const changeValue = (value: string, item: keyof T) => {
    setFormValues({
      ...formValues,
      [item]: value,
    });
  };

  return {
    ...formValues,
    formValues,
    changeValue,
  };
};
