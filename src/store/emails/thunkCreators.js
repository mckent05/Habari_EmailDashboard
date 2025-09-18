import {
  handleLoading,
  getEmails
} from "./emailSlice";
import { getToken, baseURL } from "../utils/sessions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchEmails = createAsyncThunk(
  "get/experts",
  async (search="", { dispatch, rejectWithValue }) => {
    const token = getToken();
    dispatch(handleLoading(true));

    try {
      const response = await fetch(`${baseURL}/api/emails?search=${search}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      dispatch(getEmails(data.data));
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(handleLoading(false));
    }
  }
);

