import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const json = await response.json();
        // .data because the arrays are under .data in the API docs
        setProducts(json.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      --- <h2>Testing in React</h2>
      {products.map((product, index) => {
        return (
          <Product
            key={index}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
