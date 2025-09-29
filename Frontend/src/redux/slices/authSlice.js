import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  isLoading: false,
  error: null,
  trialPeriod: {
    isActive: false,
    daysRemaining: 14,
    startDate: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
      state.trialPeriod = initialState.trialPeriod;
    },
    startTrial: (state) => {
      state.trialPeriod.isActive = true;
      state.trialPeriod.startDate = new Date().toISOString();
      state.trialPeriod.daysRemaining = 14;
    },
    updateTrialDays: (state, action) => {
      state.trialPeriod.daysRemaining = action.payload;
    },
    endTrial: (state) => {
      state.trialPeriod.isActive = false;
      state.trialPeriod.daysRemaining = 0;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  startTrial,
  updateTrialDays,
  endTrial,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;
