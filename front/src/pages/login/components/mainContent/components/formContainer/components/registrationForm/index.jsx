import React, { useEffect, useState } from "react";
import { validateEmail } from "../../../../../../../../app/utils/utils";
import { ErrorLabel, Form, InputField, SubmitButton } from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../../../../reduxThunk/actions";
import * as routes from "../../../../../../../../app/router/routes.js";
import { useNavigate } from "react-router-dom";
const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const token = useSelector((state) => state.app.token);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetErrors = () => {
    setErrorEmail("");
    setErrorUsername("");
    setErrorPassword("");
  };
  const handleRegister = () => {
    resetErrors();
    if (validateEmail(email) === null) {
      setErrorEmail("Please enter a valid email!");
    } else if (username === "") {
      setErrorUsername(`Username can not be empty!`);
    } else if (username.length > 25) {
      setErrorUsername(`Must be less than 25 characters!`);
    } else if (password === "") {
      setErrorPassword(`Password can not be empty!`);
    } else if (password !== confirmPassword) {
      setErrorPassword(`Passwords don't match!`);
    } else {
      resetErrors();
      dispatch(register(email, username, password));
    }
  };
  useEffect(() => {
    if (token !== null) {
      navigate(routes.homeRoute);
    }
  }, [token, navigate]);
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
        error={errorUsername}
        type="text"
        placeholder="Username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <ErrorLabel error={errorUsername}>{errorUsername}</ErrorLabel>
      <InputField
        error={errorPassword}
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <ErrorLabel error={errorPassword}>{errorPassword}</ErrorLabel>
      <InputField
        error={errorPassword}
        type="password"
        placeholder="Confirm Password"
        required
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <ErrorLabel error={errorPassword}>{errorPassword}</ErrorLabel>
      <SubmitButton onClick={handleRegister} type="button" disabled={loading}>
        Register
      </SubmitButton>
    </Form>
  );
};

export default RegistrationForm;
