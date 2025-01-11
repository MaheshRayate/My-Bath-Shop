import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    function handleSubmit(){
       
        alert("Triggered");
        var email = document.getElementById('email').value;
        var name = document.getElementById('name').value;
        var mobile = document.getElementById('contact').value;
        var gender = document.getElementById('gender').value;
        var password = document.getElementById('password').value;
        console.log(email);
        var xhttp = new XMLHttpRequest();
        xhttp.open('POST','/user/signup',true);
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState === 4 && xhttp.status === 200)
            {
                var data = xhttp.responseText;
                console.log(data);
                window.location.href='/'
            }
        }
        xhttp.setRequestHeader("Content-Type","application/json");
        var info = JSON.stringify({"userFullName":name,"userMobile":mobile,"userEmail":email,"userGender":gender,"userPassword":password});
        xhttp.send(info);
    }

  return (
    <div className="user-registration-div">
        <form >
            <h2>Get Started Now</h2>
            <div className="registration-input-div">
                <label for="name">Name</label>
                <div className="registration-input-box">
                    <input type="text" name="name" id="name" className='register-input' placeholder="Enter your name" />
                </div>
            </div>

            <div className="registration-input-div">
                <label for="email">Email Address</label>
                <div className="registration-input-box">
                    <input type="email" name="email" id="email" className='register-input' placeholder="Enter your email" />
                </div>
            </div>

            <div className="registration-input-div">
                <label for="contact">Contact</label>
                <div className="registration-input-box">
                    <input type="contact" name="contact" id="contact" className='register-input' placeholder="Enter contact number" />
                </div>
            </div>

            <div className="registration-input-div">
                <label for="gender">Gender</label>
                <div className="registration-input-box checkbox-input-div">
                    <span><input type="radio" name="gender" id="gender" /> Male</span>
                    <span><input type="radio" name="gender" id="gender" /> Female</span>
                    <span><input type="radio" name="gender" id="gender" /> Others</span>
                </div>
            </div>

            <div className="registration-input-div">
                <label for="password">Password</label>
                <div className="registration-input-box">
                    <input type="password" name="password" id="password" className='register-input' placeholder="Enter Password"/>
                </div>
            </div>

            <div className="registration-input-div">
                <label for="cnf-password">Confirm Password</label>
                <div className="registration-input-box">
                    <input type="password" name="cnf-password" id="cnf-password" className='register-input' placeholder="Enter Password"/>
                </div>
            </div>

            <button type='button' onClick={handleSubmit}>Submit</button>

        </form> 
      
    </div>
  )
}

export default Register;
