import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import * as routes from "../router/routes.js";
const PrivateRoutes = () => {
  const location = useLocation();
  const token = useSelector((state) => state.app.token);
  return token ? (
    <Outlet />
  ) : (
    <Navigate
      replace
      to={routes.loginRoute}
      state={{ from: location.pathname }}
    />
  );
};

export default PrivateRoutes;
