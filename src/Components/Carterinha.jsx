import React from "react";
import styled from "styled-components";

const Carteirinha = (props) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  return (
    <Container>
      <img src={props.imagem} alt="Foto carteirinha" />
      <div>
        <h3>Nome: {props.nome}</h3>
        <p>RM: {props.rm}</p>
        <p>
          {props.curso} - {props.turma}
        </p>
      </div>
    </Container>
  );
};

export default Carteirinha;
