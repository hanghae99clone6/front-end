import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/authSlice";
import postSlice from "../modules/postSlice";

const store = configureStore({
  reducer: { authSlice, postSlice },
});

export default store;
