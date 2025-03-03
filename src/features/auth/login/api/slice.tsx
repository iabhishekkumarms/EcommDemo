import {UserObj} from './api.types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'src/store/store';
// Define the initial state
interface LoginState {
  data: UserObj | null;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  data: null,
  loading: false,
  error: null,
};

// Create the slice
/**
 * A slice for managing the login state in the application.
 *
 * @remarks
 * This slice handles the login process, including request, success, and failure states.
 *
 * @example
 * ```typescript
 * import { loginSlice } from './slice';
 * ```
 *
 * @public
 */
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetLoginState: state => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {loginRequest, loginSuccess, loginFailure, resetLoginState} =
  loginSlice.actions;

export const selectUserDetails = (state: RootState) => state.login.data;

export default loginSlice.reducer;
