import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Blog } from "../utils/store/blogSlice";

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
  }),
});

export const { useGetAllBlogsQuery, useGetSingleBlogQuery } = api;
