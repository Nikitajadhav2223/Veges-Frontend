import React from "react";
import './Search.css';

const Search=()=>{
    return(
        <div>
           <div className="Search">
           <h1>Welcome to GreenVeges 🌿</h1>

<form className="search-container" action="search_results.html" method="GET">
    <input type="text" name="query" placeholder="Search fresh vegetables..." required/>
    <button type="submit">🔍</button>
</form>

        </div>
        </div>
    )
}
export default Search;