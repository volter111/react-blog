import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

// show exact post details

const BlogDetails = () => {
  const { id } = useParams(); // get acess to url id param
  const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleDeletePost = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2> {blog.title} </h2>
          <hr />
          <p> {blog.body} </p>
          <h5> Author: {blog.author} </h5>
          <div className="deleteButton">
            <button className="deleteBlogButton" onClick={handleDeletePost}>Delete</button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
