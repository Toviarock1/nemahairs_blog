import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../client";

//fetch first seven post according to how they were created
export const fetchFirstSevenPost = createAsyncThunk("posts/fetchFirstSevenPost", async () => {
  const response = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
        title,
        publishedAt,
        slug,
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
    }[0...7]`
  );
  return response;
});

//fetch all post according to how they were created
export const fetchAllPost = createAsyncThunk("posts/fetchAllPost", async () => {
  const response = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
        title,
        publishedAt,
        slug,
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

//fetch all searched post
export const fetchAllSearchedPost = createAsyncThunk("posts/fetchAllSearchedPost", async (slug) => {
  const response = await client.fetch(
    `*[title match "${slug}"] {
        title,
        slug,
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
    sevenPost: [],
    loading: true,
    searchedPost: [],
    searchedPostError: false,
    allPostError: false,
    sevenPostError: false
  },
  extraReducers: {
    [fetchFirstSevenPost.rejected]: (state, action) => {
      state.loading = false;
      state.sevenPostError = true;
    },
    [fetchFirstSevenPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.sevenPost = action.payload;
    },
    [fetchAllPost.rejected]: (state, action) => {
      state.loading = false;
      state.allPostError = true;
    },
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
    [fetchAllSearchedPost.rejected]: (state, action) => {
      state.loading = false;
      state.searchedPostError = true;
    }

  },
});

export const { incremented, decremented } = allPostSlice.actions;

export default allPostSlice.reducer;
