import { useParams } from "react-router-dom"
import { useGetSingleBlogQuery } from "../services/api";

const OpenBlog = () => {
  const params = useParams();
  const {data,isLoading} = useGetSingleBlogQuery(params.id||"");
  console.log(data);

  if(isLoading){
    return(
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className=" grid grid-cols-3 items-start justify-center h-screen">
      <div className="min-w-3/4 col-span-2 mt-16 px-4 py-10 mx-10">
        <div className="font-extrabold text-4xl max-w-3/4">{data?.title}</div>
        <div>{data?.content}</div>
      </div>
      <div></div>
    </div>
  )
}

export default OpenBlog