import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../lib/instance";

//http://3.34.95.244/ api주소

//정건희 박성우 김연중 이호진 강병욱 안성후

const initialState = {
  posts: [],
  comment: null,
  isLoading: false,
  error: null,
  post: null,
};

export const getPosts = createAsyncThunk(
  "posts/getposts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get("/api/post");
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPost = createAsyncThunk(
  "posts/getposts",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/post/${payload}`);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postComments = createAsyncThunk(
  "insta/postComments",
  async (payload, thunkAPI) => {
    console.log("payload", payload);
    try {
      const { data } = await instance.post(`/api/comment`);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error, error);
      return thunkAPI.rejectWithValue("ERROR=>", error);
    }
  }
);

export const feedSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [postComments.pending]: (state) => {
      state.isLoading = true;
    },
    [postComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [postComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default feedSlice.reducer;
