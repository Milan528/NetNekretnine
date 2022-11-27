import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddProperty from "../../pages/addProperty";
import Contact from "../../pages/contact";
import Home from "../../pages/home";
import Login from "../../pages/login";
import PrivateRoutes from "../utils/PrivateRoutes";
import * as routes from "./routes";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}></Route>
        <Route path={routes.homeRoute} element={<Home />} />
        <Route path={routes.loginRoute} element={<Login />} />
        <Route path={routes.contactRoute} element={<Contact />} />
        <Route exact path={routes.addPropertyRoute} element={<AddProperty />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
