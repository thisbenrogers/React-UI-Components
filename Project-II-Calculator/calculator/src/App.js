import React from "react";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";

import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay />
      <ButtonContainer />
    </div>
  );
};

export default App;
