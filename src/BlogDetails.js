import { useParams } from "react-router-dom";
import useFetch from './useFetch' 

// show exact post details

const BlogDetails = () => {
  const { id } = useParams(); // get acess to url id param
  const {data: blog, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts/' + id)

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2> { blog.title } </h2>
          <hr />
          <p> { blog.body }  </p>
          <h5> User ID: {blog.userId} </h5>
        </article>
      )}
      {}
    </div>
  );
};

export default BlogDetails;
