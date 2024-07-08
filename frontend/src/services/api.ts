import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Blog } from "../utils/store/blogSlice";
import { createPostType } from "@mihirkotecha/medium-project";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend.mihir-k1.workers.dev/api/v1/",
  }),
  endpoints: (builder) => ({
    
    getAllBlogs: builder.query<Blog[], void>({
      query: () => ({
        url: "/blog/posts/bulk",
        method: "GET",
        headers: { Authorization: localStorage.getItem("token") || "" },
      }),
    }),

    getSingleBlog: builder.query<Blog, string>({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET",
        headers: { Authorization: localStorage.getItem("token") || "" },
      }),
    }),

    addBlog: builder.mutation<void,createPostType>({
      query: blog => ({
        url: "/blog/post",
        method: "POST",
        headers: {Authorization: localStorage.getItem("token")||""},
        body: blog
      }),
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetSingleBlogQuery, useAddBlogMutation } = api;
