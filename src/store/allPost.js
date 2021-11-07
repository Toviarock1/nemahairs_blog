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

export const fetchAllSearchedPost = createAsyncThunk("posts/fetchAllSearchedPost", async (slug) => {
  const response = await client.fetch(
    `*[title match "${slug}"] {
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
    }`
  );
  return response;
});

const allPostSlice = createSlice({
  name: "allPost",
  initialState: {
    allPost: [],
    loading: true,
    searchedPost: []
  },
  extraReducers: {
    [fetchAllPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.allPost = action.payload;
    },
    [fetchAllSearchedPost.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchAllSearchedPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.searchedPost = action.payload;
    },
  },
});

export const { incremented, decremented } = allPostSlice.actions;

export default allPostSlice.reducer;
