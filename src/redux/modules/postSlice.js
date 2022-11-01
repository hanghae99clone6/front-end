import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//http://3.34.95.244/ api주소

//정건희 박성우 김연중 이호진 강병욱 안성후

const APIBASE = "http://3.34.95.244/";

const initialState = {
  posts: [],
  comment: null,
  isLoading: false,
  error: null,
};

export const __getPosts = createAsyncThunk(
  "posts/getposts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${APIBASE}api/post`);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
