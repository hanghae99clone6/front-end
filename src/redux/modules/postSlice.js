import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../lib/instance';

// 글 작성하기
export const addPostThunk = createAsyncThunk(
  'ADD_CONTENT',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await instance.post('/api/auth/posts', payload, config);
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
