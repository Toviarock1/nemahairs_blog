import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../client";

export const fetchAdvert = createAsyncThunk(
  "post/fetchAdvert",
  async (params, { dispatch }) => {
    // dispatch(toggleLoading())
    const response = await client.fetch(
      `*[_type == "advertisement"] {
        title,
        link,
        image {
            asset -> {
                _id,
                url,
            }
        }
    }`
    );
    return response[0];
  }
);

export const fetchPost = createAsyncThunk("post/fetchPost", async (slug) => {
  const response = await client.fetch(
    `*[slug.current == "${slug}"] {
        title,
        body,
        "tag": *[_type=='category']{ title },
        publishedAt,
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
  return response[0];
});

const singlePostSlice = createSlice({
  name: "singlePost",
  initialState: {
    advert: [],
    loading: true,
    post: [],
  },
  reducers: {
    toggleLoading: (state) => {
      return { ...state, loading: false };
    },
  },
  extraReducers: {
    [fetchAdvert.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchAdvert.fulfilled]: (state, action) => {
      state.advert = action.payload;
    },
    [fetchAdvert.rejected]: (state) => {
      state.loading = false;
    },
    [fetchPost.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.loading = false;
    },
    [fetchPost.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { getAdvert, toggleLoading } = singlePostSlice.actions;

export default singlePostSlice.reducer;
