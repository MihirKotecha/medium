import { useNavigate } from "react-router-dom"
import AuthorAvatar from "./AuthorAvata"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishDate: string,
    id: string
}

const BlogCard = ({ authorName, id, title, content, publishDate }: BlogCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/blog/"+id);
    }
    
    return (
        <div className="m-4 border-b border-slate-200 py-4 max-w-xl cursor-pointer" onClick={handleClick}>
            <div className="flex">
                <AuthorAvatar authorName={authorName} />
                <div className="ml-2 font-semibold ">{authorName}</div>
                <div className="flex justify-center items-center m-2">
                    <div className="bg-slate-500 rounded-full h-1 w-1 "></div>
                </div>
                <div className="font-extralight">{publishDate}</div>
            </div>
            <div className="mt-2 font-extrabold text-lg">
                {title}
            </div>
            <div className="text-md mt-1">
                {content.slice(0,200) + "..."}
            </div>
        </div>
    )
}

export default BlogCard