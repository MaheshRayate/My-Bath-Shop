import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { nameContext } from '../Context/Context';
import { isLoggedContext } from '../Context/Context';

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();
  const {name,setName}=useContext(nameContext);
  const {isLoggedIn,setIsLoggedIn}=useContext(isLoggedContext);

  const onSubmit = async (data) => {
    try {
      let response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      let res = await response.json();
      console.log(data, res);

      if (response.ok) {
        alert("Logged in Successfully");
        navigate('/');
        console.log(name);
        console.log(res.name);
        setName(res.name);
        console.log(name);
        
        console.log(isLoggedIn)

        setIsLoggedIn(!isLoggedIn);
        console.log(isLoggedIn)
        
      } else {
        alert("Login failed");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-div">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Hello, Welcome!</h2>

        <div className="login-input-div">
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              placeholder="Enter your Email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className='span-error-msg'>{errors.email.message}</p>}
          </div>
        </div>

        <div className="login-input-div">
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              placeholder="Enter your Password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className='span-error-msg'>{errors.password.message}</p>}
          </div>
        </div>

        <div className="remember-password">
          <p style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" name="remember" id="remember" {...register('remember')} />
            <span style={{ marginLeft: "3px" }}>Remember Password</span>
          </p>
          <p><a href="/" style={{ color: "black" }}>Forgot Password?</a></p>
        </div>

        <button type="submit" value="Submit" disabled={isSubmitting}>Submit</button>
        <p className="dont-have-account" style={{ marginTop: "4px" }}>
          Don’t have an account? <span><Link to="/register">Create Now</Link></span>
        </p>
      </form>
    </div>
  );
};

export default Login;
