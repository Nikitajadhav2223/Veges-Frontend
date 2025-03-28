import React, { useEffect, useState } from "react";
import axios from "axios";

const Productsss = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8002/Products")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setProducts([]); // Fallback to an empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.Title}>
              <strong>
                <a href={`/Products/${product.Title}`}>{product.Title}</a>
              </strong>{" "}
              - {product.type || "Unknown Type"}

              {product.type && (
                <p>
                  <a href={`/getProductsByType/${product.type}`}>
                    See more products in {product.type}
                  </a>
                </p>
              )}
            </li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default Productsss;
