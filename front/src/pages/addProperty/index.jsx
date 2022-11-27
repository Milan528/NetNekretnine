import React from "react";
import NavBar from "../../components/navbar";
import PropertyCreator from "./components/propertyCreator";

import { Main } from "./styles";

const AddProperty = () => {
  return (
    <>
      <NavBar />
      <Main>
        {/* <Container> */}
        <PropertyCreator />
        {/* </Container> */}
      </Main>
    </>
  );
};

export default AddProperty;
