import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../client";

export const fetchAllPost = createAsyncThunk("posts/fetchAllPost", async () => {
  const response = await client.fetch(
    `*[_type == "post"] {
        title,
        slug,
        body,
        "tag": *[_type=='category']{ title },
        author -> {
            name
        },
        mainImage {
            asset -> {
                _id,
                url
            },
            alt
        }
    }[0...8]`
  );
  return response;
});

const allPostSlice = createSlice({
  name: "allPost",
  initialState: {
    allPost: [],
    loading: true,
  },
  extraReducers: {
    [fetchAllPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },
  },
});

export const { incremented, decremented } = allPostSlice.actions;

export default allPostSlice.reducer;
