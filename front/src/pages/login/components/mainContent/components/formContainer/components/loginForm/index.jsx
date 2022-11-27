import React, { useEffect, useState } from "react";
import { ErrorLabel, Form, InputField, SubmitButton } from "../../styles";
import { validateEmail } from "../../../../../../../../app/utils/utils";
import { login } from "../../../../../../reduxThunk/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as routes from "../../../../../../../../app/router/routes.js";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const token = useSelector((state) => state.app.token);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const resetErrors = () => {
    setErrorEmail("");
    setErrorPassword("");
  };
  const handleLogin = () => {
    resetErrors();
    if (validateEmail(email) === null) {
      setErrorEmail("Please enter a valid email!");
    } else if (password === "") {
      setErrorPassword(`Password can not be empty!`);
    } else {
      resetErrors();
      dispatch(login(email, password));
    }
  };
  useEffect(() => {
    if (token !== null) {
      if (location.state ? (location.state.from ? true : false) : false) {
        navigate(location.state.from, { replace: true });
      } else {
        navigate(routes.homeRoute, { replace: true });
      }
    }
  }, [token, navigate, location]);
  return (
    <Form>
      <InputField
        error={errorEmail}
        type="email"
        placeholder="Email address"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <ErrorLabel error={errorEmail}>{errorEmail}</ErrorLabel>
      <InputField
        error={errorPassword}
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <ErrorLabel error={errorPassword}>{errorPassword}</ErrorLabel>
      <SubmitButton onClick={handleLogin} type="button" disabled={loading}>
        Login
      </SubmitButton>
    </Form>
  );
};

export default LoginForm;
