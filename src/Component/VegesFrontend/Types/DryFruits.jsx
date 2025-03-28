import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./ProductType.css";

const DryFruits = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://green-l4k5.onrender.com/getProductsByType/Dry%20Fruits`) // Always fetch "Dry Fruits"
      .then((response) => {
        console.log("API Response:", response.data);
        if (Array.isArray(response.data.productList)) {
          setProducts(response.data.productList);
        } else {
          console.error("Unexpected API response:", response.data);
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []); // No dependency array needed since it's fixed to "Dry Fruits"

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-category-container">
      <h2 className="category-title">Products in Dry Fruits</h2> {/* Always display "Dry Fruits" */}
      {products.length > 0 ? (
        <ul className="product-category-list">
          {products.map((product) => (
            <li key={product.Title} className="category-item">
              <strong className="product-name">{product.Title}</strong> - {product.type}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-products">No products found in this category.</p>
      )}
    </div>
  );
};

export default DryFruits;
