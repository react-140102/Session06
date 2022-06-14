import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "store";
import { api } from "../../utils/api";
import { Post } from "./Post";

interface PostsState {
  loading: boolean;
  data: Post[];
  page: number;
  pageSize: number;
  total: number;
}

const initialState: PostsState = {
  loading: false,
  data: [],
  page: 1,
  pageSize: 10,
  total: 0,
};
// _ discard
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    const resp = await api.get<Post[]>(
      `posts?_limit=${pageSize}&_page=${page}`
    );
    return {
      data: resp.data,
      total: +resp.headers["x-total-count"],
      page,
      pageSize,
    };
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.total = action.payload.total;
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      console.log(action.error);
    });
  },
});

export default postsSlice.reducer;

export const { setPageSize, setPage } = postsSlice.actions;

export const postSelector = (state: RootState) => state.post;
