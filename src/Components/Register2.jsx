import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';//Hook used for navigation

const Register2 = () => {

    const { register, handleSubmit,watch, formState: { errors, isSubmitting } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
          let response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          let res = await response.json();
          console.log(data, res);

          alert("Account created Successfully");
          navigate('/');

        } catch (error) {
          console.error("Error:", error);
        }
      };

    return (
        <div className="user-registration-div">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Get Started Now</h2>

                <div className="registration-input-div">
                    <label htmlFor="name">Name</label>
                    <div className="registration-input-box">
                        <input type="text"
                            name="name"
                            id="name"
                            className='register-input'
                            placeholder="Enter your name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <span className="span-error-msg">{errors.name.message}</span>}
                    </div>
                </div>

                <div className="registration-input-div">
                    <label htmlFor="email">Email Address</label>
                    <div className="registration-input-box">
                        <input type="email"
                            name="email"
                            id="email"
                            className='register-input'
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <span className="span-error-msg">{errors.email.message}</span>}
                    </div>
                </div>

                <div className="registration-input-div">
                    <label htmlFor="contact">Contact</label>
                    <div className="registration-input-box">
                        <input type="text"
                            name="contact"
                            id="contact"
                            className='register-input'
                            placeholder="Enter contact number"
                            {...register("contact", { required: "Contact number is required" })}
                        />
                        {errors.contact && <span className="span-error-msg">{errors.contact.message}</span>}
                    </div>
                </div>

                <div className="registration-input-div">
                    <label>Gender</label>
                    <div className="registration-input-box checkbox-input-div">
                        <span>
                            <input
                                type="radio"
                                value="Male"
                                {...register("gender", { required: "Gender is required" })}
                            /> Male
                        </span>
                        <span>
                            <input
                                type="radio"
                                value="Female"
                                {...register("gender", { required: "Gender is required" })}
                            /> Female
                        </span>
                        <span>
                            <input
                                type="radio"
                                value="Others"
                                {...register("gender", { required: "Gender is required" })}
                            /> Others
                        </span>
                        {errors.gender && <span className="span-error-msg">{errors.gender.message}</span>}
                    </div>
                </div>

                <div className="registration-input-div">
                    <label htmlFor="password">Password</label>
                    <div className="registration-input-box">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className='register-input'
                            placeholder="Enter Password"
                            {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" } })}
                        />
                        {errors.password && <span className="span-error-msg">{errors.password.message}</span>}
                    </div>
                </div>

                <div className="registration-input-div">
                    <label htmlFor="cnf-password">Confirm Password</label>
                    <div className="registration-input-box">
                        <input
                            type="password"
                            name="cnf-password"
                            id="cnf-password"
                            className='register-input'
                            placeholder="Enter Password"
                            {...register("cnfPassword", {
                                required: "Confirm password is required",
                                validate: (value) => value === watch('password') || "Passwords do not match"
                            })}
                        />
                        {errors.cnfPassword && <span className="span-error-msg">{errors.cnfPassword.message}</span>}
                    </div>
                </div>

                <button type='submit' disabled={isSubmitting}>Submit</button>

            </form>

        </div>
    )
}

export default Register2;
