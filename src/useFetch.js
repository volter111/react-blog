import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // http://localhost:8000/blogs
    // npx json-server --watch data/db.json --port 8000
    // body, id, title, userId
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for this resource");
        }
        return res.json();
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
