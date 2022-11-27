import styled from "styled-components";
import slika from "../../../../../../app/assets/images/slike/4.jpeg";

export const Section = styled.section`
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(rgba(8, 3, 4, 0.3), rgba(8, 3, 4, 0.3)),
    url(${slika});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  color: white;
  background: transparent;
  display: flex;
  flex-direction: column;
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
  > p {
    padding: 0.5rem;
    font-size: var(--normal-font-size);
  }

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;
export const SearchBar = styled.div`
  background: var(--body-color);
  border-radius: 50px;
  width: 90%;
  min-width: 260px;
  margin: 30px auto;
  padding: 6px 10px 6px 30px;

  @media screen and (max-width: 950px) {
    width: 100%;
  }
  @media screen and (max-width: 750px) {
    width: 60%;
    border-radius: 20px;
  }
  // @media screen and (max-width: 350px) {
  //   padding: 6px 10px 6px 20px;
  // }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 750px) {
    flex-direction: column;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  > div {
    width: 100%;
    flex: 0.33;
    min-width: 115px;
    padding: 5px 0 10px 0;
  }

  button {
    width: 40px;
    height: 40px;
    background: var(--first-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    > box-icon {
      height: 20px;
      width: 20px;
    }
  }

  label {
    color: var(--title-color);
    font-size: var(--h3-font-size);
  }
  select {
    color: var(--text-color);
    font-size: var(--normal-font-size);
    display: block;
    background: transparent;
    border: 0px;
    outline: none;
    width: 90%;

    option {
      font-size: var(--h3-font-size);
    }
  }
  input {
    color: var(--text-color);
    font-size: var(--normal-font-size);
    display: block;
    background: transparent;
  }

  input::placeholder {
    color: var(--text-color-light);
  }
`;
