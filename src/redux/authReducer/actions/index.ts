import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000/api/v1";

interface IUserLoginAttributes {
  email: string;
  password: string;
}

interface ILoginDataResponse {
  token: string;
  user: object;
  message: string;
}

interface IUserRegisterAttributes {
  firstName: string;
  email: string;
  password: string;
}

interface ILoginDataResponse {
  token: string;
  user: object;
  message: string;
}

interface IRegisterDataResponse {
  message: string;
}

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }: IUserLoginAttributes, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${apiUrl}/user/login`,
        { email, password },
        config
      );
      localStorage.setItem("token", data.token);
      return data as ILoginDataResponse;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (
    { firstName, email, password }: IUserRegisterAttributes,
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${apiUrl}/users/login`,
        { firstName, email, password },
        config
      );
      return data as IRegisterDataResponse;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
