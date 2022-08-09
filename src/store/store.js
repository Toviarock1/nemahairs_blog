import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./about";
import allPostReducer from "./allPost";
import commentsReducer from "./comments";
import singlePostReducer from "./singlePost";
import socialMediaLinksReducer from "./socialHandles";

export const store = configureStore({
    reducer: {
        posts: allPostReducer,
        post: singlePostReducer,
        comments: commentsReducer,
        about: aboutReducer,
        socialMediaLinks: socialMediaLinksReducer
    },
    devTools: true
})