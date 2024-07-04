import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatcher } from "../utils/store/hooks";
import { addBlogs } from "../utils/store/blogSlice";

interface Blog {
  title: string;
  id: string;
  content: string;
  author: {
    username: string;
  };
}

export const useBlogs = (shouldFetch: boolean) => {
  const [renderBlogs, setRenderBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(shouldFetch);
  const dispatch = useAppDispatcher();

  useEffect(() => {
    if (shouldFetch) {
      axios
        .get("https://backend.mihir-k1.workers.dev/api/v1/blog/posts/bulk", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setRenderBlogs(response.data);
          setIsLoading(false);
          dispatch(addBlogs(response.data));
        })
        .catch(() => setIsLoading(false));
    }
  }, [shouldFetch, dispatch]);

  return {
    renderBlogs,
    isLoading,
  };
};
