import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import postsReducer from "./postsReducer";
import { chartApi } from "api/Statistics";
import { cryptoChartApi } from "api/CyrptoChart";

export const combinedReducer = combineReducers({
  [chartApi.reducerPath]: chartApi.reducer,
  [cryptoChartApi.reducerPath]: cryptoChartApi.reducer,
  auth: authReducer,
  posts: postsReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;
