import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./actions";

// initialize token from local storage
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  currentUser: null as any,
  token,
  error: null as any,
  success: false,
  message: "",
};

const authReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state: any) => {
      localStorage.removeItem("token");
      state.loading = false;
      state.currentUser = null;
      state.token = null;
      state.error = null;
    },
    setCredentials: (state: { currentUser: any }, action: { payload: any }) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      userLogin.pending,
      (
        state: { loading: boolean; error: null; message: string },
        _action: any
      ) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      }
    );
    builder.addCase(
      userLogin.fulfilled,
      (
        state: { loading: boolean; currentUser: any; token: any; message: any },
        action: { payload: { user: any; token: any; message: any } }
      ) => {
        state.loading = false;
        state.currentUser = action.payload.user;
        state.token = action.payload.token;
        state.message = action.payload.message;
      }
    );
    builder.addCase(
      userLogin.rejected,
      (
        state: { loading: boolean; error: any; message: string },
        action: { payload: any }
      ) => {
        state.loading = false;
        state.error = action.payload;
        state.message = "";
      }
    );
    builder.addCase(
      registerUser.pending,
      (
        state: { loading: boolean; error: null; message: string },
        _action: any
      ) => {
        state.loading = true;
        state.error = null;
        state.message = "";
      }
    );
    builder.addCase(
      registerUser.fulfilled,
      (
        state: { loading: boolean; success: boolean; message: any },
        action: { payload: { message: any } }
      ) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message;
      }
    );
    builder.addCase(
      registerUser.rejected,
      (
        state: { loading: boolean; error: any; message: string },
        action: { payload: any }
      ) => {
        state.loading = false;
        state.error = action.payload;
        state.message = "";
      }
    );
  },
});

export const { logout, setCredentials } = authReducer.actions;

export default authReducer.reducer;
