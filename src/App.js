import React from "react";
import Carros from "./Components/Carros";
import Carteirinha from "./Components/Carterinha";
import Semaforo from "./Components/Semaforo";
import Imagem from "./Images/Carteirinha.png";

const App = () => {
  const carros = [
    "BMW",
    "Mitsubishi",
    "Mercedes",
    "Fiat",
    "Ford",
    "Jeep",
    "Nissan",
    "Volkswagen",
    "Honda",
    "Hyundai",
  ];

  const imagem = Imagem;
  const nome = "Daniel";
  const rm = "96235";
  const curso = "ADS";
  const turma = "1TDSR";

  return (
    <>
      <h1>Daniel Luiz de Paula Junior RM:96235 1TDSR</h1>
      <Semaforo />
      <Carros carros={carros} />
      <Carteirinha
        imagem={imagem}
        nome={nome}
        rm={rm}
        curso={curso}
        turma={turma}
      />
      <Carteirinha
        imagem={imagem}
        nome={nome}
        rm={rm}
        curso={curso}
        turma={turma}
      />
      <Carteirinha
        imagem={imagem}
        nome={nome}
        rm={rm}
        curso={curso}
        turma={turma}
      />
    </>
  );
};

export default App;
