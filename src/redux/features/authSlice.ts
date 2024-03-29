import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface IAuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: User | null;
}

// Get user data from local storage
const userFromLocalStorage = localStorage.getItem("user");

// Parse the JSON string retrieved from local storage
const parsedUserFromLocalStorage = userFromLocalStorage
  ? JSON.parse(userFromLocalStorage)
  : null;

const initialState: IAuthState = {
  isLoading: true,
  isLoggedIn: false,
  user: parsedUserFromLocalStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logout(state) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    setLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const { login, logout, setLoading } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
