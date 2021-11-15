import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../client";

export const fetchAbout = createAsyncThunk("aboutMe/fetchAbout", async () => {
  const response = await client.fetch(
    `*[_type == "about"] {
            title,
            publishedAt,
            body,
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

// export const fetchAuthor = createAsyncThunk("aboutMe/fetchAuthor", async () => {
//   const response = await client.fetch(
//     `*[_type == "author"] {
//         name,
//         bio
//       }`
//   );
//   return response[0];
// });

const about = createSlice({
  name: "about",
  initialState: {
    about: [],
    loading: true,
    error: false,
    author: [],
  },
  extraReducers: {
    [fetchAbout.fulfilled]: (state, action) => {
      state.loading = false;
      state.about = action.payload;
    },
    [fetchAbout.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    }
  },
});

export default about.reducer;
