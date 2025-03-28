
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import "./ProductTitle.css";



// const ProductTitle = () => {
//   const { Title } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8002/Products/${Title}`)
//       .then((response) => {
//         setProduct(response.data.product);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Failed to fetch product details.");
//         setLoading(false);
//       });
//   }, [Title]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <button onClick={() => navigate(-1)} >⬅ Go Back</button>

//       <h1>{product.product}</h1>
//       <img src={product.image || "/default-restaurant.jpg"} alt={product.product} className="product-detail-image" />
//       <p >📍 Location: {product.type}</p>

//       {/* See More Products in this City */}
//       <p>
//         <Link to={`/ProductsType/${product.type}`}>
//           🔍 See more products in {product.type}
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default ProductTitle;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// import * as dotenv from 'dotenv';
import axios from "axios";
import "./ProductTitle.css";

const ProductDetails = () => {
  const { Title } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://green-l4k5.onrender.com/Products/${Title}`)
      // .get(`http://localhost:8002/Products/${Title}`)
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch product details.");
        setLoading(false);
      });
  }, [Title]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="product-details-container">
      <button onClick={() => navigate(-1)} className="back-button">⬅ Go Back</button>
      <h1 className="product-title">{product.product}</h1>
      <img src={product.img || "/default-restaurant.jpg"} alt={product.product} className="product-detail-image" />
      <p className="product-location">📍 Location: {product.type}</p>
      <p>
        <Link to={`/ProductsType/${product.type}`} className="more-products-link">
          🔍 See more products in {product.type}
        </Link>
      </p>
    </div>
  );
};

export default ProductDetails;




// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import "./ProductTitle.css";

// const ProductDetails = () => {
//   const { Title } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://green-mcob.onrender.com/Products/${Title}`)
//       .then((response) => {
//         setProduct(response.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to fetch product details.");
//         setLoading(false);
//       });
//   }, [Title]);

//   if (loading) return <p className="loading">Loading...</p>;
//   if (error) return <p className="error">{error}</p>;

//   return (
//     <div className="product-details-container">
//       <button onClick={() => navigate(-1)} className="back-button">⬅ Go Back</button>
      
//       <h1 className="product-title">{product.Title}</h1>
      
//       <img 
//         src={product.img || "/default-restaurant.jpg"} 
//         alt={product.Title} 
//         className="product-detail-image" 
//         onError={(e) => e.target.src = "/default-restaurant.jpg"} // Fallback image
//       />
      
//       <p className="product-description">{product.text}</p>
//       <p className="product-price">💰 Price: {product.Price}</p>
//       <p className="product-category">📍 Category: {product.type}</p>
      
//       <p>
//         <Link to={`/ProductsType/${product.type}`} className="more-products-link">
//           🔍 See more products in {product.type}
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default ProductDetails;





