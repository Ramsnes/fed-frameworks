// ./Toso.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Todo() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  console.log(data);

  return (
    <div>
      <div>UserID: {data.userId}</div>
      <div>ID: {data.id}</div>
      <div>Title: {data.title}</div>
    </div>
  );
}

export default Todo;
