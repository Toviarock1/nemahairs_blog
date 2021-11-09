import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from './../axios-instance';

export const fetchAllComments = createAsyncThunk("comments/fetchAllComments", async (slug) => {
  const response = await axios.get(`/${slug}.json`);
  return response.data;
});

// try {
//     //const response = await fetch(`url`); //where you want to fetch data
//     //Your Axios code part.
//     const response = await axios.get(`https://nemahairs-comments-default-rtdb.firebaseio.com/${slug}.json`);//where you want to fetch data
//     return await response.json();
//   } catch (error) {
//      return thunkAPI.rejectWithValue({ error: error.message });
//   }


const commentSlice = createSlice({
  name: "comment",
  initialState: {
    loading: true,
    comments: []
  },
  extraReducers: {
      [fetchAllComments.fulfilled] : (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      }
  }
});

export default commentSlice.reducer;
