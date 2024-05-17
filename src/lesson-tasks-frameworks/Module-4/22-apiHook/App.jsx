import React, { useState, useEffect } from "react";

/**
 * Our API hook
 */
function useApi(url) {
  // data set as empty array
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    // Call the getData() after the fetch, then add [url] as side effect
    getData();
  }, [url]);
  return { data, isLoading, isError };
}

function ApiHookApp() {
  // The useApi(url) on line 6 gets a new argument (hook call) with the link.
  const { data, isLoading, isError } = useApi(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    // Renders the title of first 5 objects in the array
    <div>
      --- apiHook
      {data.slice(0, 5).map((item) => (
        <div key={item.id}>
          {item.id} - {item.title}
        </div>
      ))}
    </div>
  );
}

export default ApiHookApp;

/*
THIS:
   const { data, isLoading, isError } = useApi(
    "https://jsonplaceholder.typicode.com/todos"
  );

  IS SHORTHAND FOR:
const result = useApi("https://jsonplaceholder.typicode.com/todos");
const data = result.data;
const isLoading = result.isLoading;
const isError = result.isError;
 */
