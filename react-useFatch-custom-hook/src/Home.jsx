import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Home = () => {
  const { isLoading, isError, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  let content;
  if (!isLoading && !isError) {
    content = data?.map((el) => (
      <div key={el.id} style={{ padding: 10, margin: 2 }}>
        <div>{el.title}</div>
        <Link to={`/${el.id}`}>
          <button style={{ padding: 10, margin: 2 }}>See Details</button>
        </Link>
      </div>
    ));
  }
  return content;
};

export default Home;
