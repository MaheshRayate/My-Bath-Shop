import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-div">
      <form action="" >
        <h2>Hello, Welcome!</h2>

        <div className="login-input-div">
            <label for="email">Email</label>
            <div>
                <input type="email" name="email" id="email" className="input" placeholder='Enter your Email'/>
            </div>
            
        </div>

        <div className="login-input-div">
            <label for="password">Password</label>
            <div>
                <input  type="password" name="password" id="password" className="input" placeholder='Enter your Password'/>
            </div>
            
        </div>
        <div className="remember-password">
            <p style={{display:"flex", alignItems:"center"}}><input type="checkbox" name="" id="" /><span style={{marginLeft:"3px"}}>Remember Password</span></p>
            <p><a href="" style={{color:"black"}}>Forgot Password?</a></p>
        </div>

        <button type="submit" value="Submit">Submit</button>
        <p className="dont-have-account" style={{marginTop:"4px"}}>Don’t have an account? <span><Link to="/brandregister">Create Now</Link></span></p>
        

      </form>
    </div>
  )
}

export default Login;
