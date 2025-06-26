import { useEffect, useState } from "react";

function useFetch(url) {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        let response = await fetch(url);
        if (response.ok) {
          let data = await response.json();
          setProducts(data);
        } else {
          setError("Failed to fetch data");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchApi();
  }, [url]);

  return { products, error, setProducts }; // Correct return values
}

export default useFetch;