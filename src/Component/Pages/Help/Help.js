import React from "react";
import { Link } from "react-router-dom";
import "./Help.css";

const Help=()=>{
    return(
       
        <div>
          <div className="Help-Container">
           <h3>HELP 🤝:</h3>
  <nav class="help-section">
  <ul>
    <li>
       <a href="./Help">
          <img src="./assets/Images/Payment.jpg" alt="help" />
           Payments
       </a>
    </li>


    <li>
        <a href="./Help">
          <img src="./assets/Images/Shipping.jpg" alt="help" />
           Shipping
        </a>
    </li>


    <li>
        <a href="./Help">
          <img src="./assets/Images/Cancellation & Return.jpg" alt="help" />
            Cancellation & Return
        </a>
    </li>

      
    <li>
      <a href="./Help">
        <img src="./assets/Images/Feedback.jpg" alt="help" />
        <Link to="/ProdTitle/:Title">Feedback</Link>
      </a>
    </li>
  </ul>
</nav>
</div>
        </div>
    )
};
export default Help;