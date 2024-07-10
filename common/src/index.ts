import { z } from "zod";

export const signUpInpout = z.object({
    username: z.string(),
    password: z.string().min(6),
    email: z.string().email().optional()
});

export const signInInput = z.object({
    username: z.string(),
    password: z.string().min(6),
});

export const createPost = z.object({
    title : z.string(),
    content: z.string(),
    html_content: z.string()
});

export const updatePost = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string()
});

export type signUpType = z.infer<typeof signUpInpout>;
export type signInType = z.infer<typeof signInInput>;
export type createPostType = z.infer<typeof createPost>
export type updatePostType = z.infer<typeof updatePost>