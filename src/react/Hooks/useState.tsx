import React, { useState } from "react";

interface stateObject {
  name: string;
  username: string;
}

function UseState() {
  const [number, setNumber] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  const [array, setArray] = useState<stateObject[]>([{ name: "jhon", username: "jhondev" }]);
  const [objetc, setObject] = useState<stateObject>({ name: "max", username: "maxine12" } as stateObject);


  const handleClickAlterNumero = () => {
    setNumber((previous) => previous++);
  };

  const handleClickAlterValue = () => {
    setValue("novo valor");
  };

  const handleClickAlterArray = () => {
    setArray([...array, { name: "joe", username: "joe14" }]);
  };

  const handleClickAlterObject = () => {
    setObject({ ...objetc, username: "maxine78" });
  };

  return (
    <div>
      <button onClick={handleClickAlterNumero}>{number}</button>
      <button onClick={handleClickAlterValue}>{value}</button>
      <button onClick={handleClickAlterArray}>array</button>
      <button onClick={handleClickAlterObject}>object</button>
    </div>
  );
};

export default UseState;
