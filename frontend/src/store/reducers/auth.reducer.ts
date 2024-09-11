import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../../interfaces/auth.interface';


const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
        state.user = payload.user || "user";
    },
    logout: (state) => {
        state.user = null;
    },  
},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;