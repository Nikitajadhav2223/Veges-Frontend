

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./ProdDetails.css";


// const ProdDetails = () => {
//   const { Title } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newReview, setNewReview] = useState({ username: "", rating: 5, comment: "" });

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8002/Products/${Title}`)
//       .then((response) => {
//         setProduct(response.data.product); // Ensure correct data extraction
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to fetch product details.");
//         setLoading(false);
//       });
//   }, [Title]);

//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     if (newReview.username && newReview.comment) {
//       const updatedReviews = [...(product.reviews || []), newReview];
//       setProduct({ ...product, reviews: updatedReviews });
//       setNewReview({ username: "", rating: 5, comment: "" });
//     }
//   };

//   if (loading) return <p className="loading">Loading...</p>;
//   if (error) return <p className="error">{error}</p>;

//   const averageRating = product.reviews?.length
//     ? (product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length).toFixed(1)
//     : "No Ratings Yet";

//   return (
//     <div className="product-detail-container">
//       <button onClick={() => navigate(-1)} className="back-button">⬅ Go Back</button>
//       <h1 className="product-title">{product.product}</h1>
//       <img src={product.image || "/default-restaurant.jpg"} alt={product.product} className="-detail-image" />
//       <p className="product-type">📍 Location: {product.type}</p>
//       <p className="product-description">🌿 A fantastic spot for fresh greens and a refreshing ambiance!</p>
//       <p className="average-rating">⭐ {averageRating} / 5</p>
      
//       <div className="reviews-section">
//         <h2>Customer Reviews</h2>
//         {product.reviews?.length > 0 ? (
//           product.reviews.map((review, index) => (
//             <div key={index} className="review-card">
//               <p className="review-user"><strong>{review.username}</strong> ⭐ {review.rating}/5</p>
//               <p className="review-comment">"{review.comment}"</p>
//             </div>
//           ))
//         ) : (
//           <p>No reviews yet.</p>
//         )}
//       </div>
      
//       <div className="add-review-section">
//         <h2>Add a Review</h2>
//         <form onSubmit={handleReviewSubmit} className="review-form">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={newReview.username}
//             onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
//             required
//           />
//           <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}>
//             {[5, 4, 3, 2, 1].map((rating) => (
//               <option key={rating} value={rating}>{rating} Stars</option>
//             ))}
//           </select>
//           <textarea
//             placeholder="Write a review..."
//             value={newReview.comment}
//             onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//             required
//           />
//           <button type="submit" className="submit-button">Submit Review</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProdDetails;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProdDetails.css";

const ProductReview = () => {
  const { Title } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState({ username: "", rating: 5, comment: "" });

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

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.username && newReview.comment) {
      const updatedReviews = [...(product.reviews || []), newReview];
      setProduct({ ...product, reviews: updatedReviews });
      setNewReview({ username: "", rating: 5, comment: "" });
    }
  };

  if (loading) return <p className="loading-message">Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  const averageRating = product.reviews?.length
    ? (product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length).toFixed(1)
    : "No Ratings Yet";

  return (
    <div className="product-review-container">
      <button onClick={() => navigate(-1)} className="back-btn">⬅ Go Back</button>
      
      <h1 className="product-title">{product.product}</h1>
      <img src={product.img || "/default-product.jpg"} alt={product.product} className="product-image" />
      <p className="product-category">📌 Category: {product.type}</p>
      <p className="product-description">🌿 A fantastic spot for fresh greens and a refreshing ambiance!</p>
      <p className="average-rating">⭐ {averageRating} / 5</p>
      
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        {product.reviews?.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p className="review-user"><strong>{review.username}</strong> ⭐ {review.rating}/5</p>
              <p className="review-comment">"{review.comment}"</p>
            </div>
          ))
        ) : (
          <p className="no-reviews">No reviews yet.</p>
        )}
      </div>
      
      <div className="add-review-section">
        <h2>Add a Review</h2>
        <form onSubmit={handleReviewSubmit} className="review-form">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.username}
            onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
            required
            className="input-field"
          />
          <select 
            value={newReview.rating} 
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            className="rating-dropdown"
          >
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>{rating} Stars</option>
            ))}
          </select>
          <textarea
            placeholder="Write a review..."
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            required
            className="textarea-field"
          />
          <button type="submit" className="submit-btn">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ProductReview;
