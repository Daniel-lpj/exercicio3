import React from "react";
import { useState } from "react";

const Semaforo = () => {
  const [lista, setLista] = useState(["Pare", "Atenção", "Siga"]);

  const trocaLista = () => {
    setLista([...lista.sort()]);
  };

  return (
    <>
      <div>
        {lista.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>

      <button onClick={trocaLista}>Troca</button>
    </>
  );
};

export default Semaforo;
