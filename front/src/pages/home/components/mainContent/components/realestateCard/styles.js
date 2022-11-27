import styled from "styled-components";

export const Article = styled.article`
  width: 95%;
  min-width: 230px;
  background-color: var(--container-color);
  border-radius: 1rem;
  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 0.5rem 0.7rem 1.5rem;

  &:hover {
    box-shadow: 0 14px 16px hsla(228, 66%, 25%, 0.25);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 1rem;
  background-size: cover;
  aspect-ratio: 1.5;
  background-image: url(${(props) => props.img});
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(rgba(8, 3, 4, 0.3), rgba(8, 3, 4, 0.3)),
      url(${(props) => props.img});
  }
`;
export const CardData = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  > h3 {
    width: 80%;
    font-size: var(--h3-font-size);
    margin-bottom: 0.35rem;
    cursor: pointer;
  }

  > h3:hover {
    color: var(--second-color);
  }

  > p {
    font-size: var(--normal-font-size);
    > span {
      color: var(--title-color);
      font-weight: var(--font-medium);
    }
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--medium-font-size);
  margin-bottom: 0.5rem;
  margin-left: -5px;
  > p {
    text-decoration: underline;
    color: var(--link-color);
  }
  > .MuiSvgIcon-root {
    color: var(--link-color);
  }
`;

export const RealestateCharacteristics = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  > div {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    padding-right: 0.7rem;
    > span {
      font-size: var(--h3-font-size);
    }
    > div {
      display: flex;
      > p {
        margin-left: 0.5rem;
      }
    }
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  > box-icon {
    fill: var(--text-color);
    height: 30px;
    width: 30px;
    margin-right: 0.5rem;
  }
  > box-icon:hover {
    fill: var(--second-color);
  }
  > h2 {
    font-size: var(--h2-font-size);
    color: var(--first-color-light);
  }
`;
