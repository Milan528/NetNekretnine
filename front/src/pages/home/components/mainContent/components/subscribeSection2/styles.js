import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  // padding: 4.5rem 0 2rem;
  // @media screen and (min-width: 1025px) {
  //   padding: 7.5rem 0 1rem;
  // }
  // @media screen and (min-width: 769px) and (max-width: 1024px) {
  //   padding: 3rem 13rem;
  // }
  // @media screen and (min-width: 320px) and (max-width: 768px) {
  //   padding: 3.5rem 0 1rem;
  // }
`;
export const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--first-color);
  padding: 3rem 2rem;
  border-radius: 1.25rem;
  border: 6px solid var(--first-color-light);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: var(--h2-font-size);
    color: var(--body-color);
    margin-bottom: 1rem;
  }
  > p {
    color: var(--border-color);
    font-size: var(--small-font-size);
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1025px) {
    padding: 4rem 10rem 4.5rem;
    border-radius: 2rem;
    border: 12px solid var(--first-color-light);

    > h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    > p {
      font-size: var(--normal-font-size);
      padding: 0 0.8rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 3rem 13rem;
  }
  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const SubscribeButton = styled.button`
  border: 2px solid var(--body-color);
  background: var(--first-color-light);
  justify-content: center;
  display: inline-block;
  color: var(--body-color);
  padding: 14px 28px;
  border-radius: 0.5rem;
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  box-shadow: 0 4px 8px hsl(228deg 66% 45% / 25%);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--first-color);
  }
`;
