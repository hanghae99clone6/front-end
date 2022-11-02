import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from '../modules/authSlice';
import postSlice from '../modules/postSlice';

const store = configureStore({
  reducer: { authSlice, postSlice },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
