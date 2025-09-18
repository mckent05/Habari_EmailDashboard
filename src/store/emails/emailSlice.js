import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  emails: [],
  unreadCount: 0
};

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    getEmails: (state, action) => {
      state.emails = action.payload;
    },
    getCount: (state, action) => {
      state.unreadCount = action.payload;
    },
  },
});

export const { handleLoading, getEmails, getCount } =
  emailSlice.actions;
export default emailSlice.reducer;
