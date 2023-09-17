import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("getUsers", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  return res.data;
});

const initialState = {
  users: [],
  isError: false,
  isLoading: true,
};

export const testSlice = createSlice({
  name: "test",
  initialState,

  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },

    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    },

    [getUsers.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default testSlice.reducer;
