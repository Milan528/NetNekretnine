import { useState } from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";
import { ButtonBox, FormBox, FormContent, ToggleButton } from "./styles";

const FormContainer = () => {
  const { state } = useLocation();
  const [isLogin, setIsLogin] = useState(
    state
      ? state.displayLogin === undefined
        ? true
        : state.displayLogin
      : true
  );

  const handleToggleForm = (status) => {
    setIsLogin(status);
  };

  return (
    <FormContent>
      <FormBox>
        <ButtonBox left={isLogin ? "0" : "110px"}>
          <div id="btn"></div>
          <ToggleButton type="button" onClick={() => handleToggleForm(true)}>
            Log In
          </ToggleButton>
          <ToggleButton type="button" onClick={() => handleToggleForm(false)}>
            Register
          </ToggleButton>
        </ButtonBox>
        {isLogin ? <LoginForm /> : <RegistrationForm />}
      </FormBox>
    </FormContent>
  );
};

export default FormContainer;
