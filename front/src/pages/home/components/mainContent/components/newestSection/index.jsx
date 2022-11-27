import React, { useState } from "react";
import {
  Container,
  ContainerControls,
  NewestTitle,
  Section,
  Controls,
  Content,
} from "./styles";
import realestate1 from "../../../../../../app/assets/testData.js";
import RealestateCard from "../realestateCard";
const NewestSection = () => {
  const [clickedID, setClickedID] = useState("All");
  const controlsClicked = (id) => {
    setClickedID(id);
  };
  return (
    <Section>
      <Container>
        <ContainerControls>
          <NewestTitle>
            <span>Newest</span>
            <h2>
              Recently added property<span>.</span>
            </h2>
          </NewestTitle>
          <Controls buttonID={clickedID}>
            <button onClick={() => controlsClicked("All")} id="All">
              All
            </button>
            <button onClick={() => controlsClicked("Rent")} id="Rent">
              For Rent
            </button>
            <button onClick={() => controlsClicked("Sale")} id="Sale">
              For Sale
            </button>
          </Controls>
          <p>View All</p>
        </ContainerControls>
        <Content>
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
          <RealestateCard realestate={realestate1} />
        </Content>
        {/* <p>View All</p> */}
      </Container>
    </Section>
  );
};

export default NewestSection;
