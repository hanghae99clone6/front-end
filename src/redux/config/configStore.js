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
import postSlice from "../modules/postSlice";

const store = configureStore({
<<<<<<< HEAD
  reducer: { authSlice },
>>>>>>> 91ca3c5 (.)
=======
  reducer: { authSlice, postSlice },
>>>>>>> 2b593fc (게시글map)
});

export default store;
