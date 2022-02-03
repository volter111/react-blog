import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault() // disable auto-refresh page on submit
    const blog = {title, body, author};
    console.log(blog);

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog  added')
      setIsPending(false);
      navigate('/', { replace: true });
    })
  }

  

  return (
    <div className="create">
      <h1>Create new blog!</h1>

      <form onSubmit = {handleSubmit} className="form-group">
        <label>Blog title: </label>
        <input className="form-control" required type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>


        <label>Blog body: </label>
        <textarea className="form-control" required value={body} onChange={(event) => setBody(event.target.value)}></textarea>


        <label>Author: </label>
        <select className="form-control" value={author} onChange={(event)=>setAuthor(event.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
          <option value="Ally">Ally</option>
        </select>
       
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding Blog...</button> }
      </form>
    </div>
  );
};

export default Create;
