import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./appstore";

export interface Blog{
    title: string,
    id: string,
    content: string,
    author: {
        username: string
    }
}

const initialState: Blog[] = [];

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers:{
        addBlogs: (state, action : PayloadAction<Blog[]>) => {
            action.payload.forEach(blog => state.push(blog));
        },
    },
});

export const {addBlogs} = blogSlice.actions;
export const selectBlogs = (state:RootState) => state.blogs;
export default blogSlice.reducer;