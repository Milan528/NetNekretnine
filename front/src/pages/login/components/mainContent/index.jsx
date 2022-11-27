import React from "react";
import FormContainer from "./components/formContainer";
import { Main, Container, FillerContent } from "./styles";

const MainContent = () => {
  return (
    <Main>
      <Container>
        <FillerContent>
          <p>
            Posedovanje nekretnine je ključ blagostanja, finansijskog bogatstva
            i emocionalne sigurnosti. <br />
            Net Nekretnine
          </p>
        </FillerContent>
        <FormContainer />
      </Container>
    </Main>
  );
};

export default MainContent;
