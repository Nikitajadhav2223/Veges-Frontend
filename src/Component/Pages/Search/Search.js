// import React from "react";
// import './Search.css';
// import { Link } from "react-router-dom";

// const Search=()=>{
//     return(
//         <div>
//            <div className="Search">
//            <h1>Welcome to GreenVeges 🌿</h1>


// <form className="search-container" action="search_results.html" method="GET">
// <Link to="/products/type/:type" >
//     <input type="text" name="query" placeholder="Search fresh vegetables..." required/>
// </Link>
//  <button type="submit">🔍</button>
// </form>

//         </div>
//         </div>
//     )
// }
// export default Search;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (query.trim()) {
      navigate(`/products/type/${query.trim()}`); // Redirect to Results page with search term
    }
  };

  return (
    <div className="Search">
      <h1>Welcome to GreenVeges 🌿</h1>
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search fresh vegetables Types..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit">🔍</button>
      </form>
    </div>
  );
};

export default Search;
