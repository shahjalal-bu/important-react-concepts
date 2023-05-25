import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Post = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  let content;
  if(isLoading) return content = "Loading...."
  if (!isLoading && !isError) {
    content = (
      <div style={{ padding: 10, margin: 2 }}>
        <div>{data?.title}</div>
        <div style={{ padding: 10, margin: 2 }}>{data?.body}</div>
      </div>
    );
  }
  return content;
};

export default Post;
