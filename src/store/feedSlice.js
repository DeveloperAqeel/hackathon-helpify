import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requests: [],
  filters: {
    category: 'All',
    urgency: 'All',
    skills: '',
    location: '',
  },
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setRequests, setFilters } = feedSlice.actions;
export default feedSlice.reducer;
