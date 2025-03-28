import React,{useState} from "react";

import './LoginSignUp.css';

const SignUp=()=>{
    const [isLogin, setIsLogin] = useState(true);

    return(

        <div className="signup-container">         
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">

                    <button className={isLogin ? 'active' : ""} onClick={()=> setIsLogin(true)}>LOGIN</button>
                    <button className={!isLogin ? 'active': ""} onClick={()=> setIsLogin(false)}>SIGNUP</button>

                </div>

                {isLogin ? <>
                <div className="form">
                        <h4>LOGIN</h4>
                        
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        
                        <a href="./SignUp">Forgot Password?</a>
                        <button>LOGIN</button>
                        <p>Not a Member? <a href="./SignUp" onClick={()=> setIsLogin(false)}>SignUp</a></p>
                </div>
                </>: <>
                <div className="form">
                <h4>SIGNUP</h4>
                        
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password"/>
                       
                        <button>SIGNUP</button>
                        </div>
                </>}

            </div>

        </div>

        </div>
    
       
    )
}
export default SignUp;