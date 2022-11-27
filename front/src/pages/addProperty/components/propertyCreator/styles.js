import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 98%;
  margin-top: 2rem;
  color: white;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 90%;
  height: 90%;
  margin: 3rem auto;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 320px) {
    width: 98%;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-shadow: 0 20px 20px #ff61241f;
  border-radius: 30px;
`;

export const ToggleButton = styled.button`
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 30px;
  background: ${(props) =>
    props.active ? "linear-gradient(to right,#ff105f,#ffad06)" : "transparent"};
  position: relative;
  color: var(--body-color);
  flex: 1;
  text-align: center;
  transition: 0.5s;
`;

export const ChildContent = styled.div`
  flex: 1;
  padding: 1%;
`;
