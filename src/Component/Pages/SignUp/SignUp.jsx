// // import React,{useState} from "react";

// // import './LoginSignUp.css';

// // const SignUp=()=>{
// //     const [isLogin, setIsLogin] = useState(true);

// //     return(

// //         <div className="signup-container">         
// //         <div className="container">
// //             <div className="form-container">
// //                 <div className="form-toggle">

// //                     <button className={isLogin ? 'active' : ""} onClick={()=> setIsLogin(true)}>LOGIN</button>
// //                     <button className={!isLogin ? 'active': ""} onClick={()=> setIsLogin(false)}>SIGNUP</button>

// //                 </div>

// //                 {isLogin ? <>
// //                 <div className="form">
// //                         <h4>LOGIN</h4>
                        
// //                         <input type="email" placeholder="Email"/>
// //                         <input type="password" placeholder="Password"/>
                        
// //                         <a href="./SignUp">Forgot Password?</a>
// //                         <button>LOGIN</button>
// //                         <p>Not a Member? <a href="./SignUp" onClick={()=> setIsLogin(false)}>SignUp</a></p>
// //                 </div>
// //                 </>: <>
// //                 <div className="form">
// //                 <h4>SIGNUP</h4>
                        
// //                         <input type="email" placeholder="Email"/>
// //                         <input type="password" placeholder="Password"/>
// //                         <input type="password" placeholder="Confirm Password"/>
                       
// //                         <button>SIGNUP</button>
// //                         </div>
// //                 </>}

// //             </div>

// //         </div>

// //         </div>
    
       
// //     )
// // }
// // export default SignUp;



// // import React, { useState, useContext } from "react";
// // import { AuthContext } from "../Context/AuthContext";
// // import { loginUser, signupUser } from "../Utils/api";
// // import { Link } from "react-router-dom";
// // import "./LoginSignUp.css";

// // const SignUp = () => {
// //   const { login } = useContext(AuthContext);
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [name, setName] = useState("");
// //   const [error, setError] = useState(""); // For error messages
// //   const [loading, setLoading] = useState(false); // For loading state

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(""); // Clear any previous errors
// //     setLoading(true); // Show loading state

// //     // If signup, check if passwords match
// //     if (!isLogin && password !== confirmPassword) {
// //       setError("Passwords do not match");
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       // Make API call based on login or signup
// //       const userData = isLogin
// //         ? await loginUser({ email, password })
// //         : await signupUser({ name, email, password });

// //       login(userData);
// //     } catch (err) {
// //       setError(err.message || "Something went wrong");
// //     } finally {
// //       setLoading(false); // Hide loading state
// //     }
// //   };

// //   return (
// //     <div className="signup-container">
// //       <div className="container">
// //         <div className="form-container">
// //           <div className="form-toggle">
// //             <button
// //               className={isLogin ? "active" : ""}
// //               onClick={() => setIsLogin(true)}
// //             >
// //               LOGIN
// //             </button>
// //             <button
// //               className={!isLogin ? "active" : ""}
// //               onClick={() => setIsLogin(false)}
// //             >
// //               SIGNUP
// //             </button>
// //           </div>

// //           <form onSubmit={handleSubmit} className="form">
// //             <h4>{isLogin ? "LOGIN" : "SIGNUP"}</h4>
// //             {error && <p className="error">{error}</p>}
// //             {!isLogin && (
// //               <input
// //                 type="text"
// //                 placeholder="Full Name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 required
// //               />
// //             )}
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //             {!isLogin && (
// //               <input
// //                 type="password"
// //                 placeholder="Confirm Password"
// //                 value={confirmPassword}
// //                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                 required
// //               />
// //             )}
// //             {isLogin && <Link to="/ForgotPassword">Forgot Password?</Link>}
// //             <button type="submit" disabled={loading}>
// //               {loading ? "Loading..." : isLogin ? "LOGIN" : "SIGNUP"}
// //             </button>
// //             <p>
// //               {isLogin ? "Not a member? " : "Already have an account? "}
// //               <a href="#" onClick={() => setIsLogin(!isLogin)}>
// //                 {isLogin ? "Sign Up" : "Login"}
// //               </a>
// //             </p>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUp;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; 
// import "./SignUp.css"; // Import CSS file
// import { AuthContext } from "../Context/AuthContext";
// import { signupUser } from "../Utils/api";

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Welcome to Green Veges! Signup Successful! ✅");
//   };

//   return (
//     <div className="signup-container">
//       <h2 className="signup-heading">GreenVeges-SignUp</h2>

//       <form onSubmit={handleSubmit} className="signup-form">
//         <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="signup-input" />
//         <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required className="signup-input" />
//         <input type="password" name="password" placeholder="Create Password" onChange={handleChange} required className="signup-input" />

//         <button type="submit" className="signup-button">Sign Up</button>
//       </form>


//       <p className="login-text">
//         Already have an account? 
//         <button onClick={() => navigate("/login")} className="login-button">Login</button>
//       </p>
//     </div>
//   );
// };

// export default Signup;




import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { signupUser } from "../Utils/api";
import { Link } from "react-router-dom";
import "./SignUp.css";

const Signup = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userData = await signupUser(name, email, password);
      login(userData);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
