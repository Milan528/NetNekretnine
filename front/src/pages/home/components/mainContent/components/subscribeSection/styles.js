import styled from "styled-components";
import slika from "../../../../../../app/assets/images/slike/slika.jpg";

export const Section = styled.section`
  width: 100%;
  min-height: 80vh;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1.5rem 5rem 1.5rem;
  background-image: linear-gradient(rgba(8, 3, 4, 0.4), rgba(8, 3, 4, 0.4)),
    url(${slika});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 360px) {
    padding: 2px 2px;
  }
`;
export const Container = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
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
  @media screen and (max-width: 768px) {
    flex: 0;
  }
`;
export const SubscribeContent = styled.div`
  max-width: 50%;
  flex: 0.5;
  // padding: 30px 30px 30px 30px;
  padding: 0.5rem;

  > h2 {
    font-size: var(--h1-font-size);
    margin: 1rem 0;
  }
  > p {
    font-size: var(--h3-font-size);
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    flex: initial;
    max-width: 100%;
  }
`;

export const SubscribeButton = styled.button`
  background: ${(props) =>
    props.background ? props.background : "var(--first-color-alt)"};
  color: var(--body-color);
  padding: 0.875rem 1.625rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  box-shadow: 0 4px 8px hsla(228, 66%, 45%, 0.25);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.hover ? props.hover : "var(--first-color-alt)"};
  }

  @media screen and (max-width: 320px) {
    margin-right: 0.5rem;
    font-size: var(--small-font-size);
    padding: 12px 24px;
  }
`;
