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
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
