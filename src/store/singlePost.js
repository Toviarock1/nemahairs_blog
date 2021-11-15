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

export const fetchAllCategories = createAsyncThunk("posts/fetchAllCategories", async () => {
  const response = await client.fetch(
    `*[_type == "category"]{
      _id,
      _type,
      title,
      "posts": *[_type == "post" && references(^._id)]{
        title,
        slug
      }
    }`
  );
  return response;
});

export const fetchAuthor = createAsyncThunk('author/fetchAuthor', async () => {
  const response = await client.fetch(
    `*[_type == "author"]{
      name,
        about_me_post_card,
        bio,
        image {
        asset -> {
        url
      },
      alt
      }
      }`
  );
  return response[0];
})


const singlePostSlice = createSlice({
  name: "singlePost",
  initialState: {
    advert: [],
    loading: true,
    post: [],
    error: false,
    categories: [],
    author: []
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
      state.error = true;
    },
    [fetchAllCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchAllCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    [fetchAuthor.fulfilled]: (state, action) => {
      state.author = action.payload;
    }
  },
});

export const { getAdvert, toggleLoading } = singlePostSlice.actions;

export default singlePostSlice.reducer;
