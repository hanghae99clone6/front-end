import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import instance from '../../lib/instance';

const APIBASE = 'http://3.34.95.244/';

//http://3.34.95.244/ api주소

//정건희 박성우 김연중 이호진 강병욱 안성후

export const __getPosts = createAsyncThunk(
  'posts/getposts',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${APIBASE}api/post`);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addPostThunk = createAsyncThunk(
  'ADD_CONTENT',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/auth/posts', payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  posts: [],
  comment: null,
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
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
    // 글 작성하기
    [addPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [addPostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
