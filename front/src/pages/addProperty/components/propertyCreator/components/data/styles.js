import styled from "@emotion/styled";
export const InputField = styled.input`
  padding: 10px 0;
  color: var(--body-color);
  margin: 0px 5px;
  border-bottom: 1px solid var(--body-color);
  background: transparent;

  &::placeholder {
    color: var(--body-color-alt);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledSelect = styled.select`
  color: var(--body-color);
  background: transparent;
  outline: none;
  border: none;

  > option {
    color: black;
  }
`;

export const StyledTextArea = styled.textarea`
  color: var(--text-color);
  background: var(--body-color);
  padding: 5px;
  border-radius: 10px;
  resize: none;

  outline: none;
`;
