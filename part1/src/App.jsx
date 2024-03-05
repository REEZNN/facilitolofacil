import "./App.css";
import { useState } from "react";

const Counter = (props) => {
  // eslint-disable-next-line react/prop-types
  return <h1>{props.number}</h1>;
};

const App = () => {
  const [contador, updateContador] = useState(0); //se guarda el estado y este esta compuesto por 2 cosas

  //const contador = useState(0); se guarda el estado y este esta compuesto por 2 cosas
  //const contadorValue = contador[0]; 1. Nos devuelve el valor del estado
  //const updateContador = contador[1]; 2. Un metodo para actualizar el estado

  const handleClick = () => {
    updateContador(contador + 1);
  };
  const handleClickReset = () => {
    updateContador(0);
  };

  const isEven = contador % 2 === 0;
  const mensajePop = isEven ? "Es par" : "Es impar";

  return (
    <div>
      <h1>El valor del contador es:</h1>
      <Counter number={contador} />
      <p>{mensajePop}</p>
      <button onClick={handleClick}> Incrementar </button>
      <button onClick={handleClickReset}> Reset </button>
    </div>
  );
};

export default App;
