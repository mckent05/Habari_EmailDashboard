import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  emails: [],
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
  },
});

export const { handleLoading, getEmails } =
  emailSlice.actions;
export default emailSlice.reducer;
