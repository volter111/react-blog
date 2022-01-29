import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // http://localhost:8000/blogs
    // npx json-server --watch data/db.json --port 8000
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for this resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
