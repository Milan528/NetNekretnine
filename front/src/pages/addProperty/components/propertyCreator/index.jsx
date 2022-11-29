import React from "react";
import { useState } from "react";
import AddImages from "./components/addImages";
import AddVideo from "./components/addVideo";
import Data from "./components/data";
import AditionalCharacteristics from "./components/aditionalCharacteristics";
import {
  Container,
  Content,
  ButtonBox,
  ToggleButton,
  ChildContent,
} from "./styles";
import Location from "./components/location";

const PropertyCreator = () => {
  const [clickedView, setClickedView] = useState(0);
  const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);
  const [images, setImages] = useState([]);
  const toggleButtons = [
    { text: "Data", component: <Data /> },
    {
      text: "Add Images",
      component: <AddImages images={images} setImages={setImages} />,
    },
    { text: "Add Video", component: <AddVideo /> },
    {
      text: "Aditional Characteristics",
      component: (
        <AditionalCharacteristics
          selectedCharacteristics={selectedCharacteristics}
          setSelectedCharacteristics={setSelectedCharacteristics}
        />
      ),
    },
    {
      text: "Location",
      component: <Location />,
    },
  ];
  const handleToggleClick = (index) => {
    setClickedView(index);
  };
  return (
    <Container>
      <Content>
        <ButtonBox clickedView={clickedView}>
          {toggleButtons.map((element, index) => {
            return (
              <ToggleButton
                key={index}
                type="button"
                active={index === clickedView}
                onClick={() => handleToggleClick(index)}
              >
                {element.text}
              </ToggleButton>
            );
          })}
        </ButtonBox>
        <ChildContent>{toggleButtons[clickedView].component}</ChildContent>
      </Content>
    </Container>
  );
};

export default PropertyCreator;
