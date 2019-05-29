import React from "react";

import ClearButton from "./ClearButton";
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";

import "./Button.scss";

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <ClearButton />
      <NumberButton />
      <ActionButton />
    </div>
  );
};

export default ButtonContainer;
