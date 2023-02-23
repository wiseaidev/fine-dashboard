import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  postsList: [] as any[],
  available: 0,
  error: null as any,
  success: false,
  message: "",
};

const postsReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.available = action.payload.available;
      state.postsList = action.payload.postsList;
    },
  },
});

export const { setPosts } = postsReducer.actions;

export default postsReducer.reducer;
