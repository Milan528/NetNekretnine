import React from "react";
import { useState } from "react";
import { Container } from "./styles";

const CheckBox = ({ isChecked, index, element, handleCheckboxClick }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = (event) => {
    const value = event.target.value;
    handleCheckboxClick(!checked, value);
    setChecked((prev) => !prev);
  };
  return (
    <Container key={index}>
      <input
        type="checkbox"
        value={element}
        checked={checked}
        onChange={(event) => handleOnChange(event)}
      />
      <label htmlFor={element}>{element}</label>
    </Container>
  );
};

export default CheckBox;
