import React from "react";
import CheckBox from "./checkBox/CheckBox";
import { CheckBoxContainer, Container } from "./styles";

const AditionalCharacteristics = ({
  selectedCharacteristics,
  setSelectedCharacteristics,
}) => {
  // const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);

  const characteriistics = [
    "Alarm",
    "Bazen",
    "Garderoberi",
    "Kamera",
    "Podrum",
    "Telefon",
    "Video nadzor/Interfon",
    "Automatska kapija",
    "Elektronska vrata",
    "Igraliste",
    "Kamin",
    "Opticka mreza",
    "Satelitska televizija",
    "terasa",
    "Vrt",
    "Balkon",
    "Garaza",
    "Internet",
    "Kucni ljubimci",
    "Ostava",
    "Sigurnosna vrata",
    "Teretana",
    "Basta",
    "Garaza",
    "Kablovska",
    "Lift",
    "Parking",
    "Smestaj studenata",
    "Vesernica",
  ];

  const removeItem = (prevState, item) => {
    const newArr = [...prevState];
    const index = newArr.indexOf(item);
    if (index !== -1) {
      newArr.splice(index, 1);
    }
    return newArr;
  };

  const addItem = (arr, item) => {
    const newArr = [...arr];
    newArr.push(item);
    return newArr;
  };

  const checkIfItemIn = (arr, item) => {
    if (arr) {
      var index = arr.indexOf(item);
      if (index !== -1) {
        return true;
      }
      return false;
    }
    return false;
  };

  const handleCheckboxClick = (checked, value) => {
    if (checked)
      setSelectedCharacteristics([...selectedCharacteristics, value]);
    else setSelectedCharacteristics(removeItem(selectedCharacteristics, value));

    // console.log(selectedCharacteristics); //dispatch?
  };

  return (
    <Container>
      <CheckBoxContainer>
        {characteriistics.map((element, index) => {
          return (
            <CheckBox
              key={index}
              element={element}
              index={index}
              isChecked={checkIfItemIn(selectedCharacteristics, element)}
              handleCheckboxClick={handleCheckboxClick}
            />
          );
        })}
      </CheckBoxContainer>
    </Container>
  );
};

export default AditionalCharacteristics;
