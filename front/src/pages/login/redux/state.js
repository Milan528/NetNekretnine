export const initialState = {
  loading: false,
  error: null,
};

const getState = () => {
  if (localStorage.getItem("auth")) {
    const state = JSON.parse(localStorage.getItem("auth"));
    return state;
  } else return initialState;
};

export default getState();
