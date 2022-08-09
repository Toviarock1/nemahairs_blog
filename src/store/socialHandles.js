import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import client from '../client'

export const fetchSocialMediaLinks = createAsyncThunk("socialLinks/fetchSocialMediaLinks", async () => {
    const response = client.fetch(`*[_type == "social-handle-links"]{
        facebook_link,
        twitter_link
    }`);
    return response;
} )

const socialHandlesSlice = createSlice({
    name: "socialHandles",
    initialState: {
        links: []
    },
    extraReducers: {
        [fetchSocialMediaLinks.fulfilled]: (state, action) => {
            state.links = action.payload;
            console.log(action.payload)
        }
    }
})

export default socialHandlesSlice.reducer;