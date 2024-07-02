import axios from "axios";
import { useEffect, useState } from "react";
interface Blog{
    title: string,
    id: string,
    content: string,
    author: {
        username: string
    }
}
export const useBlogs =  () => {
  const [renderBlogs, setRenderBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://backend.mihir-k1.workers.dev/api/v1/blog/posts/bulk", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setRenderBlogs(response.data), setIsLoading(false);
      });
  }, [])
  return {
    renderBlogs,
    isLoading,
  };
};
