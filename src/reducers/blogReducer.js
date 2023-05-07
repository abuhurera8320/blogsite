import { createSlice } from "@reduxjs/toolkit";

const blogReducer = createSlice({
  name: "blog",
  initialState: {
    blog: {},
  },
  reducers: {
    setBlogCount: (state, action) => {
      const { id } = action.payload;
      state.blog[id] = (state.blog[id] || 0) + 1;
    },
  },
});

const { actions, reducer } = blogReducer;

export const { setBlogCount } = actions;

export default reducer;
