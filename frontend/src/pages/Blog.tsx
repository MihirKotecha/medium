import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import BlogListSkeleton from "../components/BlogListSkeleton";
import { useGetAllBlogsQuery } from "../services/api";

const Blog = () => {

  const { data, isLoading } = useGetAllBlogsQuery();

  const displayBlogs = data || [];

  if (isLoading) {
  return (
    <div className="flex justify-center flex-wrap">
      <div className="w-full mt-6">
        <AppBar />
      </div>
      <div className="w-1/2 flex justify-center items-center flex-col">
        <BlogListSkeleton />
        <BlogListSkeleton />
        <BlogListSkeleton />
        <BlogListSkeleton />
      </div></div>
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
