import React, { useState } from "react";
import Card from "./Card";

function App() {
  const [nombre, setnombre] = useState("");
  const [animal, setAnimal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handlenombreChange = (event) => {
    setnombre(event.target.value);
  };

  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.length < 3 || nombre.trim() !== nombre || animal.length < 6) {
      setErrorMessage("Por favor, verifica que la información sea correcta");
      setShowCard(false);
    } else {
      setErrorMessage("");
      setShowCard(true);
    }
  };

  return (
    <div className="App">
      <h1>Elige Un Animal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ingresa Tu Nombre:</label>
          <input type="text" value={nombre} onChange={handlenombreChange} />
        </div>
        <div>
          <label>Ingresa tu animal favorito:</label>
          <input type="text" value={animal} onChange={handleAnimalChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {showCard && <Card nombre={nombre} animal={animal} />}
    </div>
  );
}

export default App;

