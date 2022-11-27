import styled from "styled-components";
import slika from "../../app/assets/images/slike/4.jpeg";
export const Main = styled.main`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(rgba(8, 3, 4, 0.3), rgba(8, 3, 4, 0.3)),
    url(${slika});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
