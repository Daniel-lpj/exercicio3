import React, { useState } from "react";
import styled from "styled-components";
import Imagem from "../Images/Carteirinha.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
  }
`;

const CarteirinhaInput = () => {
  const [carterinha, setCarterinha] = useState({
    nome: "",
    rm: "",
    curso: "",
    turma: "",
  });

  const dadosCarterinha = (e) => {
    const { name, value } = e.target;
    if (name === "nome") {
      setCarterinha({
        nome: value,
        rm: carterinha.rm,
        curso: carterinha.curso,
        turma: carterinha.turma,
      });
    } else if (name === "rm") {
      setCarterinha({
        nome: carterinha.nome,
        rm: value,
        curso: carterinha.curso,
        turma: carterinha.turma,
      });
    } else if (name === "curso") {
      setCarterinha({
        nome: carterinha.nome,
        rm: carterinha.rm,
        curso: value,
        turma: carterinha.turma,
      });
    } else if (name === "turma") {
      setCarterinha({
        nome: carterinha.nome,
        rm: carterinha.rm,
        curso: carterinha.curso,
        turma: value,
      });
    }
  };

  return (
    <Container>
      <img src={Imagem} alt="Foto carteirinha" />
      <div>
        <h3>
          Nome: <input name="nome" onChange={dadosCarterinha} />
        </h3>
        <h3>
          RM: <input name="rm" onChange={dadosCarterinha} />
        </h3>
        <h3>
          Curso: <input name="curso" onChange={dadosCarterinha} />
        </h3>
        <h3>
          Turma: <input name="turma" onChange={dadosCarterinha} />
        </h3>
      </div>
      <div>
        <h4>Nome: {carterinha.nome} </h4>
        <h4>RM: {carterinha.rm} </h4>
        <h4>Curso: {carterinha.curso} </h4>
        <h4>Turma: {carterinha.turma} </h4>
      </div>
    </Container>
  );
};

export default CarteirinhaInput;
