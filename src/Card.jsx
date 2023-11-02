import React from "react";

function Card(props) {
  return (
    <div>
      <h2>Información del animal</h2>
      <p>Hola {props.nombre}!</p>
      <p>Sabemos que tu animal favorito es: {props.animal}</p>
    </div>
  );
}

export default Card;
