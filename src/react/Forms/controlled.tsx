"use client";
import React, { useState } from "react";

const Controlled = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("email", email);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          email
          <input
            required
            type="text"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
          />
        </label>
        <button type="submit">submeter</button>
      </form>
    </section>
  );
};

export default Controlled;
