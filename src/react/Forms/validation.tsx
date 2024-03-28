"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email("digite email valido").max(15).required(),
    password: yup.string().required(),
  })
  .required();

const FormComplete = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    criteriaMode: "all",
    mode: "all",
    resolver: yupResolver(schema),
  });

  const handleSubmitform: SubmitHandler<FormData> = (data: FormData) => {
    console.log("data", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitform)}>
      <label htmlFor="iemail">
        email
        <input
          {...register("email")}
          required
          type="text"
          placeholder="Digite seu e-mail"
          id="iemail"
          aria-invalid={errors.email ? "true" : "false"}
          className={`${errors.email ? "border border-red-600" : "border border-gray-500"
            } outline-none `}
        />
        {errors.email && errors.email.type === "required" && (
          <span role="alert">This is required</span>
        )}
        {errors.email && errors.email.type === "max" && (
          <span role="alert">Max length exceeded</span>
        )}
      </label>
      <label htmlFor="password">
        senha
        <input
          {...register("password")}
          required
          type="password"
          placeholder="Digite sua senha"
          aria-invalid={errors.password ? "true" : "false"}
          className={`${errors.password ? "border border-red-600" : "border border-gray-500"
            } outline-none `}
        />
      </label>
      <button type="submit">submeter</button>
    </form>
  );
};

export default FormComplete;
