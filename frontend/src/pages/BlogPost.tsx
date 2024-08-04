import { useState } from "react"
import Tiptap from "../components/TipTap"
import { useAddBlogMutation, useGetAllBlogsQuery } from "../services/api";
import { createPostType } from "@mihirkotecha/medium-project";
import { useNavigate } from "react-router-dom";


const BlogPost = () => {

    const [blogContent, setBlogContent] = useState("");
    const [blogTitle, setBlogTitle] = useState("");
    const [blogString, setBlogString] = useState("");
    const navigate = useNavigate();
    const [addBlog] = useAddBlogMutation();
    const { refetch } = useGetAllBlogsQuery();

    const handleClick = async () => {
        const finalContent: createPostType = {
            title: blogTitle,
            html_content: blogContent,
            content: blogString
        }
        await addBlog(finalContent);
        refetch();
        navigate("/blogs");

    }


    return (
        <div className="">
            <div className="flex flex-col mx-32 mt-36">
                <input className="w-full border-l p-4 text-4xl h-24 font-serif placeholder-slate-300 flex items-center outline-none" placeholder="Title" onChange={(e) => setBlogTitle(e.target.value)}></input>
                <Tiptap setFinalContent={setBlogContent} setFinalStringedContent={setBlogString}/>
                <button
                    onClick={handleClick}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded w-40"
                >
                    Post
                </button>
            </div>
        </div>
    )
}

export default BlogPost