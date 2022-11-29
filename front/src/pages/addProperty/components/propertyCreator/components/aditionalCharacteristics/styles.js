import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1%;
`;

export const CheckBoxContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem 1rem;

  // @media screen and (min-width: 1201px) {
  //   grid-template-columns: repeat(4, 1fr);
  // }
  // and (max-width: 1200px)
  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  // display: flex;
  // flex-direction: column;
  // wrap:flex-wrap;
`;
