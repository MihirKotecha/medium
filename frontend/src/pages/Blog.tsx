import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import { useGetAllBlogsQuery } from "../services/api";
import { useAppSelector } from "../utils/store/hooks";

const Blog = () => {
  const blogs = useAppSelector((appStore) => appStore.blogs);

  const {data,isLoading} = useGetAllBlogsQuery();

  const displayBlogs = blogs.length > 0 ? blogs : data||[];

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <div className="my-6">
        <AppBar />
      </div>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-1/2 flex justify-center flex-wrap">
          {displayBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              authorName={blog.author.username}
              content={blog.content}
              publishDate="Dec 11, 2023"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
  
export default Blog;
