import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [authorId, setAuthorId] = useState('1')


  return (
    <div className="create">
      <h2>Create new blog!</h2>
      <form>
        <label>Blog title: </label>
        <input type="text" value={title} onChange={(element) => setTitle(element.target.value)} required></input>


        <label>Blog body: </label>
        <textarea required value={body} onChange={(element) => setBody(element.target.value)}></textarea>


        <label>Author ID: </label>
        <select value={authorId} onChange={(e)=>setAuthorId(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
       
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
