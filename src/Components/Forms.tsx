import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const Forms = () => {
  const { formValues, email, password, changeValue } = useForm({
    email: "email@test",
    password: "12345678",
  });

  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        placeholder="Email"
        className="form-control"
        value={email}
        onChange={({ target }) => changeValue(target.value, "email")}
      />
      <input
        type="text"
        placeholder="Password"
        className="form-control mt-2 mb-2"
        value={password}
        onChange={({ target }) => changeValue(target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </code>
    </>
  );
};
