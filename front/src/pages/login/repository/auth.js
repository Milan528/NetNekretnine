import services from "../../../services/index";

export const registerUserRepository = async (userData) => {
  const response = await services.post("/auth/register", userData);
  return response.data;
};

export const loginUserRepository = async (userData) => {
  const response = await services.post("/auth/login", userData);
  return response.data;
};
