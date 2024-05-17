/* 
- Get a list of products from the end-point: https://v2.api.noroff.dev/online-shop

- Display a component for each product, using all of the properties from the object in the data
 */

import React, { useEffect, useState } from "react";
import IsLoading from "./components/IsLoading";
import IsError from "./components/IsError";

const url = "https://v2.api.noroff.dev/online-shop";

function ApiCallsApp() {
  const [products, setProducts] = useState([]);
  // State for holding our loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // async fn that fetch the data
    async function getData() {
      try {
        // Reset the error state in case there as an error previously
        setIsError(false);
        // Turn on the loading state each time we do an API call
        setIsLoading(true);

        // Fetch data
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        // Changes state to include the fetched date
        setProducts(json.data);
        console.log(typeof products);

        // Clear the loading state once we've successfully got our data
        setIsLoading(false);
      } catch (error) {
        // Clear the loading state if we get an error and then set our error state to true
        setIsLoading(false);
        setIsError(true);
      }
    }
    // Call fetcher
    getData();
  }, []);

  // ./components/IsLoading.jsx
  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError />;
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ApiCallsApp;
