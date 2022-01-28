import { useState } from "react";

let Body = () => {
  const [blogs, setBlogs] = useState([
      {title: 'New blog', body: 'Lorem ipsum...', author: 'Ian', id: 1},
      {title: 'Some tips', body: 'Lorem ipsum...', author: 'Jan', id: 2},
      {title: 'How to code', body: 'Lorem ipsum...', author: 'Stan', id: 3},
  ])
  return (
    <div className="homepage">
      <h1>Home Page</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Body;
