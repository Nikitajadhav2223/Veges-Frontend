// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Results() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const { type } = useParams(); // Get city and category from URL params
//   console.log(" type -->>>", type );
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch products based on type 
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         let url = "";

//         if (type) {
//           // Fetch restaurants by city
//           url = `http://localhost:8002/getProductsByType/${type}`;
//         }
//         // } else if (category) {
//         //   // Fetch restaurants by category
//         //   url = `http://localhost:5400/getRestaurantsByCategory/${category}`;
//         // }

//         if (url) {
//           const response = await axios.get(url);
//           console.log("Response data:", response.data);
//           setProducts(response.data.productList || []); // Assuming the list is under restaurantList
//         }
//       } catch (err) {
//         setError("Failed to fetch products.");
//       }
//     };

//     if (type || category) {
//       fetchProducts();
//     }
//   }, [type, category]);

//   return (
//     <div>
//       <h1>
//         Products in {type ? type : category ? category : "Our Collection"}
//       </h1>

//       {error && <p className="error">{error}</p>}

//       <div className="product-list">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.Title} className="product-card">
//               <Link to={`/Products/${product.Title}`} className="product-link">
//                 <img
//                   src={product.img || "/default-product.jpg"} // Default image if not provided
//                   alt={product.product}
//                   className="product-image"
//                 />
//                 <div className="product-details">
//                   <h2>{product.product}</h2>
//                   <p>📍 {product.type}</p>
//                 </div>
//               </Link>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Results;




// import { useLocation, useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Results() {
//   const { type } = useParams(); // Get type from URL params
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch products based on type
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         if (type) {
//           const url = `http://localhost:8002/getProductsByType/${type}`;
//           const response = await axios.get(url);
//           console.log("Response data:", response.data);
//           setProducts(response.data.productList || []);
//         }
//       } catch (err) {
//         setError("Failed to fetch products.");
//       }
//     };

//     if (type) {
//       fetchProducts();
//     }
//   }, [type]);

//   return (
//     <div>
//       <h1>Products in {type || "Our Collection"}</h1>

//       {error && <p className="error">{error}</p>}

//       <div className="product-list">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.Title} className="product-card">
//               <Link to={`/Products/${product.Title}`} className="product-link">
//                 <img
//                   src={product.img || "/default-product.jpg"} // Default image if not provided
//                   alt={product.product}
//                   className="product-image"
//                 />
//                 <div className="product-details">
//                   <h2>{product.product}</h2>
//                   <p>📍 {product.type}</p>
//                 </div>
//               </Link>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Results;


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Result.css';

function Results() {
  const { type } = useParams(); // Get search term from URL params
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products based on type
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (type) {
          const url = `http://localhost:8002/getProductsByType/${type}`;
          const response = await axios.get(url);
          console.log("Response data:", response.data);
          setProducts(response.data.productList || []);
        }
      } catch (err) {
        setError("Failed to fetch products.");
      }
    };

    if (type) {
      fetchProducts();
    }
  }, [type]);

  return (
    <div>
      <h1>Products in {type || "Our Collection"}</h1>

      {error && <p className="error">{error}</p>}

      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.Title} className="product-card">
              <Link to={`/Products/${product.Title}`} className="product-link">
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
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Results;
