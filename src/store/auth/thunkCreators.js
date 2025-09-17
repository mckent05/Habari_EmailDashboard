import {
  handleLoading,
  userSignUp,
  userSignIn,
  userSignOut,
} from "./authSlice";
import { clearSession, getToken, baseURL } from "../utils/sessions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const handleSignIn = createAsyncThunk(
  "auth/login",
  async (user, { dispatch }) => {
    const { email, password } = user;
    const loginDetails = { email, password };
    dispatch(handleLoading(true));
    const postDetails = await fetch(`${baseURL}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(loginDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await postDetails.json();
    if (response.success) {
      const {
        data: { token },
        message
      } = response;
      localStorage.setItem("user-token", JSON.stringify(token));
      localStorage.setItem("session", true);
      dispatch(userSignIn());
      toast.success(message);
    } else {
      toast.error(response.error);
    }
    dispatch(handleLoading(false));
  }
);

export const handleSignUp = createAsyncThunk(
  "auth/register",
  async (user, { dispatch }) => {
    dispatch(handleLoading(true));
    const postDetails = await fetch(`${baseURL}/api/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const serverResponse = await postDetails.json();
    if (serverResponse.message) {
      dispatch(userSignUp(true));
      toast.success(serverResponse.message);
    } else {
      dispatch(userSignUp(false));
      toast.error(serverResponse.error);
    }
    dispatch(handleLoading(false));
  }
);

export const handleSignOut = createAsyncThunk(
  "auth/sign_out",
  async (_, { dispatch }) => {
    const userToken = getToken();
    dispatch(handleLoading(true));
    const details = await fetch(`${baseURL}/auth/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
    });
    const response = await details.json();
    dispatch(userSignOut());
    clearSession();
    toast.success(response.message);
    dispatch(handleLoading(false));
  }
);
