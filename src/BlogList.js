import { Link } from "react-router-dom";

// show all posts on home page

const BlogList = ({ blogs, title }) => {
  const titleShortener = (t) => {
    if (t.length > 30) {
      return t.slice(0, 35) + "...";
    } else {
      return t;
    }
  };

  return (
    <div className="blog-list">
      <h2>{title}</h2>

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="blog-title">{titleShortener(blog.title)}</h2>
          </Link>
          <p className="blog-name">Written by author: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
