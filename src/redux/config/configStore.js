import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../modules/authSlice";
import postSlice from "../modules/postSlice";
import feedSlice from "../modules/feedSlice";

const store = configureStore({
  reducer: { authSlice, postSlice, feedSlice },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
