import React, { useEffect } from "react";
import { useState } from "react";

const Semaforo = () => {
  const [lista, setLista] = useState(["Pare", "Atenção", "Siga"]);

  const trocaLista = () => {
    setLista(lista.splice(1, 2));
  };

  useEffect(() => {
    if (lista.length < 1) {
      setLista(["Pare", "Atenção", "Siga"]);
    }
  }, [lista]);

  return (
    <>
      <div>
        <h2>{lista[0]}</h2>
      </div>
      <button onClick={trocaLista}>Troca</button>
    </>
  );
};

export default Semaforo;
