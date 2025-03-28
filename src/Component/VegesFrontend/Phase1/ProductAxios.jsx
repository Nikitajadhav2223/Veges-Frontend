// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProductAxios = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8002/Products")
//       .then((response) => {
//         console.log("API Response:", response.data); // Debugging
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           console.error("Unexpected API response:", response.data);
//           setProducts([]); // Fallback to an empty array
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Products List</h2>
//       <ul>
//         {Array.isArray(products) && products.length > 0 ? (
//           products.map((product) => (
//             // <li key={restaurant.id}>
//             //   <strong>{restaurant.restaurant}</strong> - {restaurant.city}
//             // </li>
//             <li key={product.Title}>
//               <strong>
//                 <a href={`/ProductsTitle/${product.Title}`}>{product.Title}</a>
//               </strong> - {product.type}

//               <p>
//                 <a href={`/ProductsType/${product.type}`}>
//                   See more products in {product.type}
//                 </a>
//               </p>

//             </li>

            
//           ))
//         ) : (
//           <p>No products available.</p>
//         )}
//       </ul>

      
//     </div>
//   );
// };

// export default ProductAxios;




import React, { useEffect, useState } from "react";
import axios from "axios";
// import * as dotenv from 'dotenv';
import "./ProductAxios.css"; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://green-l4k5.onrender.com/Products")
      // .get("http://localhost:8002/Products")
      .then((response) => {
        console.log("API Response:", response.data);
        if (Array.isArray(response.data)) {
          setProducts(response.data);
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
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-container">
      <h2 className="title">Products List</h2>
      <ul className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.Title} className="product-item">
              <strong>
                <a href={`/ProductsTitle/${product.Title}`} className="product-link">{product.Title}</a>
              </strong> - {product.type}
              <p>
                <a href={`/ProductsType/${product.type}`} className="type-link">
                  See more products in {product.type}
                </a>
              </p>
            </li>
          ))
        ) : (
          <p className="no-products">No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
