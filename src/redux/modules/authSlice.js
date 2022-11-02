import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  member: [],
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
