// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./ProductDetails.css";


// const ProductDetails = () => {
//   const { Title} = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // axios
//     //   .get(`http://localhost:5400/restaurants/${id}`)
//     //   .then((response) => {
//     //     setRestaurant(response.data);
//     //     setLoading(false);
//     //   })
//     //   .catch((error) => {
//     //     setError("Failed to fetch restaurant details.");
//     //     setLoading(false);
//     //   });

//     axios
//   .get(`http://localhost:8002/Products/${Title}`)
//   .then((response) => {
//     setProduct(response.data.product); // Ensure correct data extraction
//     setLoading(false);
//   })
//   .catch(() => {
//     setError("Failed to fetch product details.");
//     setLoading(false);
//   });

//   }, [Title]);

//   if (loading) return <p className="loading">Loading...</p>;
//   if (error) return <p className="error">{error}</p>;

//   return (
//     <div className="product-detail-container">
//       <button onClick={() => navigate(-1)} className="back-button">⬅ Go Back</button>

//       <h1 className="product-title">{product.product}</h1>
//       <img
//         src={product.image || "/default-restaurant.jpg"}
//         alt={product.product}
//         className="product-detail-image"
//       />
//       <p className="product-type">📍 Location: {product.type}</p>
//       <p className="product-description">
//       🌿 A fantastic spot for fresh greens and a refreshing ambiance!
//       </p>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

const ProductInfo = () => {
  const { Title } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://green-l4k5.onrender.com/Products/${Title}`)
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch product details.");
        setLoading(false);
      });
  }, [Title]);

  if (loading) return <p className="loading-message">Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="product-info-container">
      <button onClick={() => navigate(-1)} className="back-btn">⬅ Go Back</button>

      <h1 className="product-name">{product.product}</h1>
      <img
        src={product.img || "/default-product.jpg"}
        alt={product.product}
        className="product-image"
      />
      <p className="product-category">📌 Category: {product.type}</p>
      <p className="product-description">
        🌿 A fantastic spot for fresh greens and a refreshing ambiance!
      </p>
    </div>
  );
};

export default ProductInfo;







