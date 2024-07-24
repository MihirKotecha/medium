import { useParams } from "react-router-dom"
import { useGetSingleBlogQuery } from "../services/api";
import AuthorAvatar from "../components/AuthorAvata";

const OpenBlog = () => {
  const params = useParams();
  const { data, isLoading } = useGetSingleBlogQuery(params.id || "");
  // console.log(data?.author);

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className=" grid grid-cols-3 items-start justify-center h-screen">
      <div className="min-w-full col-span-2 m-16 px-4 py-10 mx-10 border-r-2">
        <div className="font-extrabold text-4xl max-w-3/4">{data?.title}</div>
        <div className="mt-2 pl-1">Published on Dec 11, 2023</div>
        <div dangerouslySetInnerHTML={{ __html: data?.html_content || "" }} className="mt-6"></div>
      </div>
      <div className="flex justify-center flex-col m-28">
        <h1 className="font-bold text-xl">Author</h1>
        <div className="flex mt-4 items-center">
          <AuthorAvatar authorName={data?.author.username || ""}/>
          <div className="ml-2 text-3xl font-bold">{data?.author.username}</div>
        </div>
      </div>
    </div>
  )
}

export default OpenBlog