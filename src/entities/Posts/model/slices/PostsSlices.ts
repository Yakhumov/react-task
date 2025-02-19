import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../../shared/api/api";
import { IPosts, PostsShema } from "../../../../entities/Posts/types/types";

const initialState: PostsShema = {
  posts: [],
  loading: false,
  error: undefined,
};

export const fetchPosts = createAsyncThunk<IPosts[],void >(
  "fetch/posts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Неизвестная ошибка загрузки"); 
    }
  }
);

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string 
      });
  },
});

export default PostsSlice.reducer;

