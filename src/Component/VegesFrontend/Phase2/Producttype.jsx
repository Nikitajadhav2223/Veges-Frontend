// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Producttype.css";

// const ProductsByType = () => {
//   const [types, setTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch all restaurants first to extract unique cities
//     axios
//       .get("http://localhost:8002/Products")
//       .then((response) => {
//         if (response.data && Array.isArray(response.data)) {
//           const uniqueTypes = [
//             ...new Set(response.data.map((r) => r.type)),
//           ];
//           setTypes(uniqueTypes);
//         }
//       })
//       .catch((error) => console.error("Error fetching Types:", error));
//   }, []);

//   const handleTypeChange = (event) => {
//     const type = event.target.value;
//     setSelectedType(type);
//     setLoading(true);
//     setError(null);

//     axios
//       .get(`http://localhost:8002/getProductsByType/${type}`)
//       .then((response) => {
//         if (response.data.productList && Array.isArray(response.data.productList)) {
//           setProducts(response.data.productList);
//         } else {
//           setProducts([]);
//         }
//       })
//       .catch((error) => {
//         setError("Failed to fetch Products.");
//         setLoading(false);
//       });
//   };

//   return (
//     console.log("types-->>>",types),
//     <div className="container">
//       <h1 className="title"> GreenVeges Clone 🍽️</h1>

//       <div className="dropdown-container">
//         <label>Select a type: </label>
//         <select onChange={handleTypeChange} value={selectedType}>
//           <option value="">-- Select --</option>
//           {types.map((type, index) => (

//             <option key={index} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading && <p className="loading">Loading Products...</p>}
//       {error && <p className="error">{error}</p>}

//       <div className="products-list">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.Title} className="product-card">
//               <h2>{product.product}</h2>
//               <p>📍 {product.type}</p>
//             </div>
//           ))
//         ) : (
//           <p className="no-data">No products found for this type.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductsByType;

import React, { useEffect, useState } from "react";
// import * as dotenv from 'dotenv';
import axios from "axios";
import "./Producttype.css";

const ProductCategoryFilter = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
       .get("https://green-l4k5.onrender.com/Products")
      //.get("http://localhost:8002/Products")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          const uniqueTypes = [...new Set(response.data.map((r) => r.type))];
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
      .get(`https://green-l4k5.onrender.com/getProductsByType/${type}`)
      // .get(`http://localhost:8002/getProductsByType/${type}`)
      .then((response) => {
        if (response.data.productList && Array.isArray(response.data.productList)) {
          setProducts(response.data.productList);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products.");
        setLoading(false);
      });
  };

  return (
    <div className="category-filter-container">
      <h1 className="header-title">🌿 GreenVeges Clone</h1>
      <div className="dropdown-container">
        <label className="dropdown-label">Select a type:</label>
        <select onChange={handleTypeChange} value={selectedType} className="dropdown">
          <option value="">-- Select --</option>
          {types.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {loading && <p className="loading">Loading Products...</p>}
      {error && <p className="error">{error}</p>}

      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.Title} className="product-card">
              <h2 className="product-title">{product.product}</h2>
              <p className="product-location">📍 {product.type}</p>
            </div>
          ))
        ) : (
          <p className="no-data">No products found for this type.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCategoryFilter;
