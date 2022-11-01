<<<<<<< HEAD
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../lib/instance';

export const addPostThunk = createAsyncThunk(
  'ADD_CONTENT',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/auth/posts', payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
=======
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
>>>>>>> 008a787 (CRUD 30% 정도완료)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

<<<<<<< HEAD
const initialState = {
  member: [],
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {},
  extraReducers: {
    // 글 작성하기
    [addPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [addPostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addPostThunk.rejected]: (state, action) => {
=======
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
>>>>>>> 008a787 (CRUD 30% 정도완료)
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

<<<<<<< HEAD
export default authSlice.reducer;
=======
export default postSlice.reducer;
>>>>>>> 008a787 (CRUD 30% 정도완료)
