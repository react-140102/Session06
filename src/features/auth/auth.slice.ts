import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "store";
import { api } from "../../utils/api";

interface AuthState {
  loading: boolean;
  token: string;
  email: string;
}

const initialState: AuthState = {
  loading: false,
  token: "", //<---
  email: "",
};

export const login = createAsyncThunk("auth/login", async (loginData: any) => {
  const resp = await api.post<{ token: string }>(`auth/login`, loginData);
  return {
    data: resp.data,
    email: loginData.email,
  };
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.data.token;
      state.email = action.payload.email;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;

// export const {  } = authSlice.actions;

export const authSelector = (state: RootState) => state.post;
