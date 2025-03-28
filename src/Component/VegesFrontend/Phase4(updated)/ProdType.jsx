import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProdTypesss = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all products to extract unique types
    axios
      .get("http://localhost:8002/Products")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const uniqueTypes = [...new Set(response.data.map((p) => p.type))];
          setTypes(uniqueTypes);
        }
      })
      .catch((error) => console.error("Error fetching types:", error));
  }, []);

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:8002/getProductsByType/${type}`)
      .then((response) => {
        if (response.data.productList && Array.isArray(response.data.productList)) {
          setProducts(response.data.productList);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch products.");
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1 className="title">🌿 GreenVeges Market</h1>

      {/* Dropdown to select a type */}
      <div className="dropdown-container">
        <label>Select a Type: </label>
        <select onChange={handleTypeChange} value={selectedType}>
          <option value="">-- Select --</option>
          {types.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

     
      {/* Loading & Error Messages */}
      {loading && <p className="loading">Loading products...</p>}
      {error && <p className="error">{error}</p>}

      {/* Restaurant List */}
      <div className="restaurant-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.Title} className="product-card">
              {/* Link to product details page */}
              <Link to={`/ProductsTitle/${product.Title}`} className="product-link">
                <img
                  src={product.img || "/default-product.jpg"} // Default image if not provided
                  alt={product.product}
                  className="product-image"
                />
                <div className="product-details">
                  <h2>{product.product}</h2>
                  <p>📍 {product.type}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-data">No products found for this type.</p>
        )}
      </div>
    </div>
  );
};


export default ProdTypesss;
