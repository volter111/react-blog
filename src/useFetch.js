import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // http://localhost:8000/blogs
    // npx json-server --watch data/db.json --port 8000 ---- how to start local JSON server
    // https://jsonplaceholder.typicode.com/posts ---- fake JSON data
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((responce) => {
        if (!responce.ok) {
          throw Error("Could not fetch the data for this resource");
        }
        return responce.json();
      })
      .then((data) => {
        console.log(data); // log data obj to console
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
