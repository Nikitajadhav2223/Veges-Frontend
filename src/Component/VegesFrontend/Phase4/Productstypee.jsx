// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./Productstypee.css";



// const Productstypee = () => {
//   const [types, setTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch all products to extract unique types
//     axios
//       .get("https://green-mcob.onrender.com/Products")
//       .then((response) => {
//         if (response.data && Array.isArray(response.data)) {
//           const uniqueTypes = [
//             ...new Set(response.data.map((r) => r.type)),
//           ];
//           setTypes(uniqueTypes);
//         }
//       })
//       .catch((error) => console.error("Error fetching types:", error));
//   }, []);

//   const handleTypeChange = (event) => {
//     const type = event.target.value;
//     setSelectedType(type);
//     setLoading(true);
//     setError(null);

//     axios
//       .get(`https://green-mcob.onrender.com/getProductsByType/${type}`)
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

//       {/* Dropdown to select a type */}
//       <div className="dropdown-container">
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

//       {/* Product List */}
//       <div className="Products-list">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.Title} className="product-card">
//               {/* Link to product details page */}
//               <Link to={`/ProductsTitle/${product.Title}`} className="product-link">
//                 <img
//                   src={product.image || "/default-restaurant.jpg"} // Default image if not provided
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
//           <p className="no-data">No products found for this type.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Productstypee;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Productstypee.css";

const ProductList = () => {
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
      .catch(() => {
        setError("Failed to load product types.");
      });
  }, []);

  const handleTypeChange = async (event) => {
    const type = event.target.value;
    setSelectedType(type);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://green-l4k5.onrender.com/getProductsByType/${type}`
      );

      const productList = response.data?.productList || [];
      setProducts(Array.isArray(productList) ? productList : []);
    } catch {
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-container">
      <h1 className="product-title">🌿 GreenVeges Market</h1>

      <div className="dropdown-wrapper">
        <label className="dropdown-label">Choose a Category:</label>
        <select className="dropdown-select" onChange={handleTypeChange} value={selectedType}>
          <option value="">-- Select --</option>
          {types.length > 0 ? (
            types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))
          ) : (
            <option disabled>Loading categories...</option>
          )}
        </select>
      </div>

      {loading && <p className="loading-text">Loading products...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={product.id || index} className="product-card">
              <Link to={`/ProductsTitle/${product.Title}`} className="product-link">
                <img
                  src={product.img|| "/default-restaurant.jpg"}
                  alt={product.product}
                  className="product-image"
                />
                <div className="product-info">
                  <h2 className="product-name">{product.product}</h2>
                  <p className="product-category">📍 {product.type}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-data">No products available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
