import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { removeCookie, setCookie } from '../../lib/cookie';
import instance from '../../lib/instance';
import reissue from '../../lib/reissue';

export const addMemberThunk = createAsyncThunk(
  'ADD_MEMBER',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/member/signup', payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const checkInMemberThunk = createAsyncThunk(
  'CHECK_IN_MEMBER',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance
        .post('/api/member/login', payload)
        .then((res) => {
          if (res.data.success === false) alert(res.data.error.message);
          setCookie('Auth', res.request.getResponseHeader('Authorization'), 2);
          setCookie(
            'Access',
            res.request.getResponseHeader('Authorization'),
            2
          );
          setCookie('Refresh', res.request.getResponseHeader('Refresh-Token'));
          setInterval(reFreshToken, 60000);
        });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const reFreshToken = createAsyncThunk(
  'REFRESH_TOKEN',
  async (payload, thunkAPI) => {
    try {
      await reissue.post('/api/member/reissue').then((res) => {
        setCookie('Access', res.request.getResponseHeader('Authorization'), 2);
      });
      return thunkAPI.fulfillWithValue(true);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const checkOutMemberThunk = createAsyncThunk(
  'CHECK_OUT_MEMBER',
  async (payload, thunkAPI) => {
    try {
      await instance.post('/api/auth/member/logout');
      removeCookie('Auth');
      removeCookie('Refresh');
      removeCookie('Access');
      return thunkAPI.fulfillWithValue(true);
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
    // 회원가입
    [addMemberThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.member.push(action.payload);
    },
    [addMemberThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addMemberThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 로그인
    [checkInMemberThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = true;
      console.log(action);
    },
    [checkInMemberThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [checkInMemberThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 로그아웃
    [checkOutMemberThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
    },
    [checkOutMemberThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [checkOutMemberThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
