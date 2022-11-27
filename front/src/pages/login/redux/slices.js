import { createSlice } from "@reduxjs/toolkit";
import state from "./state";

const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const actions = authSlice.actions;
export const { setLoading, setError } = authSlice.actions;

export const authReducer = authSlice.reducer;
