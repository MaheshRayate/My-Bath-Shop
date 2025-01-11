import React from 'react';
import { Link } from 'react-router-dom';
import "../brand.css"

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
    <div className="user-registration-div brand-registration-div">
        <form className='brand-registration-form'>
            <h2>Get Started Now</h2>
            <div className="registration-input-div brand-input-div">
                <label for="brandname">Brand Name</label>
                <div className="registration-input-box  brand-input-box">
                    <input type="text" name="brandname" id="brandname" className='register-input' placeholder="Enter brand name" />
                </div>
            </div>

            <div className="registration-input-div brand-input-div">
                <label for="email">Email Address</label>
                <div className="registration-input-box brand-input-box">
                    <input type="email" name="email" id="email" className='register-input' placeholder="Enter your email" />
                </div>
            </div>

            <div className="registration-input-div brand-input-div">
                <label for="contact">Contact</label>
                <div className="registration-input-box brand-input-box">
                    <input type="contact" name="contact" id="contact" className='register-input' placeholder="Enter contact number" />
                </div>
            </div>

            <div className="registration-input-div brand-input-div">
                <label for="contact">Address</label>
                <div className="registration-input-box brand-input-box">
                    <input type="address" name="address" id="address" className='register-input' placeholder="Enter your address" />
                </div>
            </div>

            <div className="registration-input-div brand-input-div">
                <label for="contact">Bank Account No.</label>
                <div className="registration-input-box brand-input-box">
                    <input type="address" name="address" id="address" className='register-input' placeholder="Enter bank account number" />
                </div>
            </div>

            <div className="registration-input-div brand-input-div">
                <label for="contact">Bank IFSC Code</label>
                <div className="registration-input-box brand-input-box">
                    <input type="address" name="address" id="address" className='register-input' placeholder="Enter bank IFSC" />
                </div>
            </div>

            <div className="registration-input-div brand-input-div">
                <label for="contact">Bank Name</label>
                <div className="registration-input-box brand-input-box">
                    <input type="address" name="address" id="address" className='register-input' placeholder="Enter bank name" />
                </div>
            </div>

            <div className="registration-input-div brand-input-div">
                <label for="contact">Bank Branch</label>
                <div className="registration-input-box brand-input-box">
                    <input type="address" name="address" id="address" className='register-input' placeholder="Enter bank branch name" />
                </div>
            </div>

            <div className="registration-input-div brand-input-div">
                <label for="contact">GST No.</label>
                <div className="registration-input-box brand-input-box">
                    <input type="address" name="address" id="address" className='register-input' placeholder="Enter GST number" />
                </div>
            </div>

            <div className="registration-input-div brand-input-div">
                <label for="password">Password</label>
                <div className="registration-input-box brand-input-box">
                    <input type="password" name="password" id="password" className='register-input' placeholder="Enter your Password"/>
                </div>
            </div>

            <div className="registration-input-div brand-input-div">
                <label for="cnf-password">Confirm Password</label>
                <div className="registration-input-box">
                    <input type="password" name="cnf-password" id="cnf-password" className='register-input' placeholder="Confirm your Password"/>
                </div>
            </div>

            <button type='button' onClick={handleSubmit}>Submit</button>

        </form> 
      
    </div>
  )
}

export default Register;
