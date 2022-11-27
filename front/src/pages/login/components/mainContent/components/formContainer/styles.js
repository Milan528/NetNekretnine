import styled from "styled-components";
import Button from "@mui/material/Button";
export const FormContent = styled.div`
  max-width: 50%;
  height: 80%;
  flex: 0.5;

  > h2 {
    font-size: var(--h1-font-size);
    margin: 1rem 0;
  }
  > p {
    font-size: var(--h3-font-size);
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    flex: 1;
    max-width: 100%;
  }
`;

export const FormBox = styled.div`
  width: 85%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% auto;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 540px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const ButtonBox = styled.div`
  width: 220px;
  margin: 2rem auto;
  position: relative;
  box-shadow: 0 20px 20px #ff61241f;
  border-radius: 30px;

  > #btn {
    top: 0;
    left: ${(props) => (props.left ? props.left : "0")};
    position: absolute;
    height: 100%;
    width: 110px;
    background: linear-gradient(to right, #ff105f, #ffad06);
    border-radius: 30px;
    transition: 0.5s;
  }
`;

export const ToggleButton = styled.button`
  width: 50%;
  cursor: pointer;
  padding: 10px 30px;
  background: transparent;
  position: relative;
  color: var(--body-color);
`;

export const Form = styled.form`
  width: 80%;
  // margin-top: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
`;

function handleErrorLabel(props) {
  if (props.error === "") {
    return "none";
  } else {
    return "block";
  }
}
export const ErrorLabel = styled.label`
  align-self: flex-end;
  font-size: var(--smaller-font-size);
  display: ${(props) => handleErrorLabel(props)};
  color: var(--second-color);
`;
function handleErrorInputField(props) {
  if (props.error === undefined || props.error === "") {
    return "var(--body-color)";
  } else {
    return "var(--second-color)";
  }
}
export const InputField = styled.input`
  width: 100%;
  padding: 10px 0;
  color: var(--body-color);
  margin: 5px 0;
  border-bottom: 1px solid ${(props) => handleErrorInputField(props)};
  background: transparent;

  &::placeholder {
    color: var(--body-color-alt);
  }
`;

export const SubmitButton = styled.button`
  background: ${(props) =>
    props.disabled ? "var(--first-color-light)" : "var(--first-color-alt)"};
  color: var(--body-color);
  padding: 0.875rem 1.625rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  box-shadow: 0 4px 8px hsla(228, 66%, 45%, 0.25);
  transition: 0.3s;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  &:hover {
    background: ${(props) =>
      props.disabled ? "var(--first-color-light)" : "var(--first-color)"};
  }

  @media screen and (max-width: 320px) {
    margin-right: 0.5rem;
    font-size: var(--small-font-size);
    padding: 12px 24px;
  }
`;
