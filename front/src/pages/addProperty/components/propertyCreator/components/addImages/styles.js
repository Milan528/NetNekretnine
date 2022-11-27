import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageSliderContainer = styled.div`
  flex: 1;
`;

export const ControlsContainer = styled.div`
  padding: 8px;
  text-align: center;
  > label {
    cursor: pointer;
  }
  > input {
    display: none;
  }
`;
