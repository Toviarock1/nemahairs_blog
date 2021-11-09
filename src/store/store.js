import { configureStore } from "@reduxjs/toolkit";
import allPostReducer from "./allPost";
import comments from "./comments";
import singlePostReducer from "./singlePost";

export const store = configureStore({
    reducer: {
        posts: allPostReducer,
        post: singlePostReducer,
        comments: comments
    }
})