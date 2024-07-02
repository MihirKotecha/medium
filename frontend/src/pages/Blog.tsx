import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks/useBlogs"

const Blog = () => {
  const {isLoading,renderBlogs} = useBlogs();
  if(isLoading){
    return(
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
      <div className="my-6">
        <AppBar />
      </div>
      <div className="flex justify-center items-center flex-wrap ">
        <div className="w-1/2 flex justify-center flex-wrap">
          {renderBlogs.map((blog)=> <BlogCard title={blog.title} authorName={blog.author.username} content={blog.content} publishDate="Dec 11, 2023"/>)}
        </div>
      </div>
    </div>
  )
}

export default Blog
