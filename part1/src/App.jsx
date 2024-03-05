import "./App.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Counter = ({ numeroactual }) => {
  return <h1>{numeroactual}</h1>;
};

const App = () => {
  const [contador, updateContador] = useState(0); //se guarda el estado y este esta compuesto por 2 cosas
  //1. Nos devuelve el valor del estado
  //2. Un metodo para actualizar el estado

  console.log("render");

  const handleClick = () => {
    updateContador(contador + 1);
  };
  const handleClickReset = () => {
    updateContador(0);
  };

  const isEven = contador % 2 === 0;
  const mensajePop = isEven ? "Es par" : "Es impar";

  //El componente Counter se muestra el valor actual del contador, se identifica como number=contador
  return (
    <div>
      <h1>El valor del contador es:</h1>

      <Counter numeroactual={contador} />

      <p>{mensajePop}</p>
      <button onClick={handleClick}> Incrementar </button>
      <button onClick={handleClickReset}> Reset </button>
    </div>
  );
};

export default App;
