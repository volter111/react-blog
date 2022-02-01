import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // http://localhost:8000/blogs local data
  const { data: blogs, isPending, error } = useFetch("https://jsonplaceholder.typicode.com/posts/");

  return (
    <div className="homepage">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
