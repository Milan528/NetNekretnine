import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 4.5rem 0 2rem;
  // @media screen and (min-width: 1025px) {
  //   padding: 7.5rem 0 1rem;
  // }
  // @media screen and (min-width: 769px) and (max-width: 1024px) {
  //   padding: 3rem 0 1rem;
  // }
  // @media screen and (min-width: 320px) and (max-width: 768px) {
  //   padding: 3.5rem 0 1rem;
  // }
`;
export const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  > p {
    text-align: center;
    cursor: pointer;
    color: var(--first-color);
  }
  > p:hover {
    text-decoration: underline;
  }
`;

export const ContainerControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  > p {
    cursor: pointer;
    color: var(--first-color);
    @media screen and (max-width: 768px) {
      padding-top: 1rem;
    }
  }
  > p:hover {
    text-decoration: underline;
  }
`;

export const NewestTitle = styled.div`
  > span {
    color: var(--second-color);
    font-size: var(--small-font-size);

    @media screen and (min-width: 1025px) {
      font-size: var(--h2-font-size);
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: var(--h3-font-size);
    }
  }
  > h2 {
    font-size: var(--h1-font-size);
    margin-bottom: 1rem;
    > span {
      color: var(--second-color);
    }
  }
`;

export const Controls = styled.div`
  width: initial;
  margin-left: auto;
  padding-right: 1rem;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    padding-right: 0px;
  }
  > button {
    min-width: 60px;
    background: transparent;
    border-radius: 50px;
    border: solid 2px var(--first-color);
    text-align: center;
    color: var(--first-color-alt);
    font-size: var(--normal-font-size);
    padding: 0.5rem;
    margin: 5px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: var(--small-font-size);
    }
  }

  > button#${(props) => (props.buttonID ? props.buttonID : "Rent")} {
    color: var(--body-color);
    background: var(--first-color);
  }
`;

export const Content = styled.div`
  padding-top: 2rem;
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

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
