import { setToken, setRole } from "../../../app/redux/slices";
import { setError, setLoading } from "../redux/slices";
import {
  loginUserRepository,
  registerUserRepository,
} from "../repository/auth";
// import serialize from "../../../components/serialize";

export const register =
  (email, username, password) => async (dispatch, getState) => {
    const userData = {
      email,
      username,
      password,
    };
    try {
      dispatch(setLoading(true));
      const user = await registerUserRepository(userData);
      dispatch(setToken(user.token));
      dispatch(setRole(user.role));
    } catch (err) {
      // setError(serialize(err));
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const login = (email, password) => async (dispatch, getState) => {
  const userData = {
    email,
    password,
  };
  try {
    dispatch(setLoading(true));
    const user = await loginUserRepository(userData);
    dispatch(setToken(user.token));
    dispatch(setRole(user.role));
  } catch (err) {
    // setError(serialize(err));
    console.log(err);
  } finally {
    dispatch(setLoading(false));
  }
};
