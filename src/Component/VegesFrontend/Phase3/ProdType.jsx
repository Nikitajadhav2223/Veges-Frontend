// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./ProdType.css";



// const ProdType = () => {
//   const [types, setTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");
//   const [Products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch all restaurants to extract unique cities
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
//         setError("Failed to fetch products.");
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="container">
//       <h1 className="title">🌿 GreenVeges Clone</h1>
//        {/* Dropdown to select a type*/}
//        <div className="dropdown-container">
//         <label>Select a Type: </label>
//         <select onChange={handleTypeChange} value={selectedType}>
//           <option value="">-- Select --</option>
//           {types.map((type, index) => (
//             <option key={index} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Loading & Error Messages */}
//       {loading && <p className="loading">Loading products...</p>}
//       {error && <p className="error">{error}</p>}

//       {/* Products List */}
//       <div className="product-list">
//         {Products.length > 0 ? (
//           Products.map((product) => (
//             <div key={product.Title} className="product-card">
//               {/* Link to product details page */}
//               <Link to={`/ProductsTitle/${product.Title}`} className="product-link">
//                 <img
//                   src={product.image || "/default-product.jpg"} // Default image if not provided
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
//           <p className="no-data">No products found for this city.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProdType;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProdType.css";

const ProductCategoryFilter = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://green-l4k5.onrender.com/Products")
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
        <label className="dropdown-label">Select a Type: </label>
        <select onChange={handleTypeChange} value={selectedType} className="dropdown">
          <option value="">-- Select --</option>
          {types.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {loading && <p className="loading">Loading products...</p>}
      {error && <p className="error">{error}</p>}

      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.Title} className="product-card">
              <Link to={`/ProductsTitle/${product.Title}`} className="product-link">
                <img
                  src={product.img || "/default-product.jpg"}
                  alt={product.product}
                  className="product-image"
                />
                <div className="product-details">
                  <h2 className="product-title">{product.product}</h2>
                  <p className="product-location">📍 {product.type}</p>
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

export default ProductCategoryFilter;







