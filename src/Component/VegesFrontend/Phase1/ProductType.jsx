

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductType.css";


const ProductCategory = () => {
  const { type } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://green-l4k5.onrender.com/getProductsByType/${type}`)
      
      // .get (`http://localhost:8002/getProductsByType/${type}`)
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
  }, [type]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-category-container">
      <h2 className="category-title">Products in {type}</h2>
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


    // [
    // 
    // <div className="products-list">
    //     {products.length > 0 ? (
    //       products.map((product) => (
    //         <div key={product.Title} className="product-card">
    //           <Link to={`/ProductsTitle/${product.Title}`} className="product-link">
    //             <img
    //               src={product.image || "/default-product.jpg"}
    //               alt={product.product}
    //               className="product-image"
    //             />
    //             <div className="product-details">
    //               <h2 className="product-title">{product.product}</h2>
    //               <p className="product-location">📍 {product.type}</p>
    //             </div>
    //           </Link>
    //         </div>
    //       ))
    //     ) : (
    //       <p className="no-data">No products found for this type.</p>
    //     )}
    //   </div>]
  );
};

export default ProductCategory;


// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./ProductType.css";

// const ProductCategory = () => {
//   const { type } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://green-mcob.onrender.com/getProductsByType/${type}`)
//       .then((response) => {
//         console.log("API Response:", response.data);
//         if (Array.isArray(response.data.productList)) {
//           setProducts(response.data.productList);
//         } else {
//           console.error("Unexpected API response:", response.data);
//           setProducts([]);
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [type]);

//   if (loading) return <p className="loading">Loading...</p>;
//   if (error) return <p className="error">Error: {error}</p>;

//   return (
//     <div className="product-category-container">
//       <h2 className="category-title">Products in {type}</h2>

//       {products.length > 0 ? (
//         <div className="products-list">
//           {products.map((product) => (
//             <div key={product.Title} className="product-card">
//               <Link to={`/ProductsTitle/${product.Title}`} className="product-link">
//                 <img
//                   src={product.img || "/default-product.jpg"} 
//                   alt={product.Title} 
//                   className="product-image"
//                   onError={(e) => (e.target.src = "/default-product.jpg")} // Fallback image
//                 />
//                 <div className="product-details">
//                   <h2 className="product-title">{product.Title}</h2>
//                   <p className="product-description">{product.text}</p>
//                   <p className="product-price">💰 {product.Price}</p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="no-products">No products found in this category.</p>
//       )}
//     </div>
//   );
// };

// export default ProductCategory;
