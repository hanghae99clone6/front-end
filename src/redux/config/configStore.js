<<<<<<< HEAD
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from '../modules/authSlice';

const store = configureStore({
  reducer: { authSlice },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
=======
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/authSlice";

const store = configureStore({
  reducer: { authSlice },
>>>>>>> 91ca3c5 (.)
});

export default store;
