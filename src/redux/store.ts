import { configureStore } from "@reduxjs/toolkit";
import { combinedReducer } from "./rootReducer";
import { authApi } from "../api/Auth";
import { chartApi } from "../api/Statistics";
import { cryptoChartApi } from "../api/CyrptoChart";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "authReducer",
    "chartApi",
    "usersReducer",
    "postsReducer",
    "cryptoChartApi",
  ],
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(
      authApi.middleware,
      chartApi.middleware,
      cryptoChartApi.middleware,
      thunk
    ) as any,
});

export default store;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
