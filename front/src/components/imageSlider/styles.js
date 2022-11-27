import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  flex: 0.8;
  width: 65%;
  max-width: 1024px;

  @media screen and (max-width: 768px) {
    width: 75%;
  }
  @media screen and (max-width: 480px) {
    width: 85%;
  }
  @media screen and (max-width: 320px) {
    width: 95%;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : "transparent"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ControlsContainer = styled.div`
  position: relative;
  margin-top: 0.2rem;
  flex: 0.2;
  width: 80%;
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    > box-icon {
      display: none;
    }
  }

  > box-icon {
    cursor: pointer;
    fill: var(--body-color);
    top: 50%;
    position: absolute;
    transform: translate(0, -50%);
  }

  > box-icon#prev {
    left: 1%;
  }

  > box-icon#next {
    right: 1%;
  }
`;

export const SlidesContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slide = styled.div`
  flex: ${(props) => (props.isSelected ? "0.3" : "0.25")};
  min-width: 80px;
  height: ${(props) => (props.isSelected ? "95%" : "80%")};
  border: ${(props) =>
    props.isSelected ? "1px solid var(--body-color)" : "none"};
  cursor: pointer;

  margin: 5px;
  border-radius: 10px;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : "transparent"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
