// import { useState } from "react";
// import "./Login.css"; // Import CSS file
// import { Link } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
// import { loginUser } from "../Utils/api";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Welcome back to Green Veges! Login Successful! ✅");
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login-heading">GreenVeges-Login</h2>

//       <form onSubmit={handleSubmit} className="login-form">
//         <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required className="login-input" />
//         <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required className="login-input" />

//         <button type="submit" className="login-button">Login</button>
//       </form>
//       <p>Don't have an account? <Link to="/SignUp">Sign up</Link></p>
//     </div>
//   );
// };

// export default Login;





import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { loginUser } from "../Utils/api";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userData = await loginUser(email, password);
      login(userData);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default Login;
