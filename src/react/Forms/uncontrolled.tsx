"use client";
import React, { useRef, ElementRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef<ElementRef<"input">>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("email", emailRef?.current?.value);
  };

  const handleSubmitGetByEvent = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // @ts-ignore
    console.log(e.currentTarget.senha.value);
    // @ts-ignore
    console.log(e.currentTarget.email.value);
  };
  //
  return (
    <section>
      {/*pegando o valor do input através de ref */}
      <form onSubmit={handleSubmit}>
        <label>
          email
          <input
            required
            type="text"
            placeholder="Digite seu e-mail"
            ref={emailRef}
          />
        </label>
        <button type="submit">submeter</button>
      </form>

      {/*pegando o valor do input através do evento submit */}

      <form onSubmit={(e: React.SyntheticEvent) => handleSubmitGetByEvent(e)}>
        <label>
          email
          <input
            name="email"
            required
            type="text"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            autoComplete="off"
          />
        </label>
        <label>
          senha
          <input
            name="senha"
            required
            type="password"
            placeholder="Digite sua senha"
            autoComplete="off"
          />
        </label>
        <button type="submit">submeter</button>
      </form>
    </section>
  );
};

export default Uncontrolled;
