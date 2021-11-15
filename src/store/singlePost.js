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

export const fetchAllCategories = createAsyncThunk(
  "post/fetchAllCategories",
  async () => {
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
  }
);

export const fetchAuthor = createAsyncThunk("author/fetchAuthor", async () => {
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
});

export const fetchPopularPost = createAsyncThunk(
  "posts/fetchPopularPost",
  async () => {
    const response = client.fetch(`
    *[_type == "popular-post"] {
      posts[] -> {
        title,
        slug,
        publishedAt,
        mainImage {
        asset -> {
        url
      }
      }
      }
    }[0]
  `);
  return response;
  }
);

const singlePostSlice = createSlice({
  name: "singlePost",
  initialState: {
    advert: [],
    loading: true,
    post: [],
    error: false,
    categories: [],
    author: [],
    popularPost: []
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
    },
    [fetchPopularPost.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPopularPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.popularPost = [...action.payload.posts];
      console.trace(action.payload)
    },
    [fetchPopularPost.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export const { getAdvert, toggleLoading } = singlePostSlice.actions;

export default singlePostSlice.reducer;
