import React from "react";

const Carros = (props) => {
  return (
    <ul>
      {props.carros.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Carros;
