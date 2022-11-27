import styled from "styled-components";
import slika from "../../../../app/assets/images/slike/4.jpeg";
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

export const Container = styled.div`
  width: 90%;
  height: 90%;
  margin-top: var(--header-height);

  color: white;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    text-align: center;
    font-size: var(--biggest-font-size);
    color: var(--body-color);
    margin: 1rem 0;
    @media screen and (max-height: 700px) {
      font-size: var(--h1-font-size);
    }
  }

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;
export const FillerContent = styled.div`
  flex: 0.5;
  text-align: center;
  font-size: var(--h2-font-size);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
