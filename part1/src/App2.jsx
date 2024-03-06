import { useState } from "react";

const App2 = () => {
  const [counters, updateCounters] = useState({
    left: 0,
    right: 0,
    click: 0,
    mensaje: "facilito lo fazil",
  });

  const handleClickL = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1,
      click: counters.click + 1,
    };
    updateCounters(newCountersState);
  };

  const handleClickR = () => {
    updateCounters({
      ...counters,
      right: counters.left + 1,
      click: counters.click + 1,
    });
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleClickL}> left </button>
      <button onClick={handleClickR}> right </button>
      {counters.right}
      <p>numero de clicks: {counters.click} </p>
      <p>{counters.mensaje}</p>
    </div>
  );
};

export default App2;
