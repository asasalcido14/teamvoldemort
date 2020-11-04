import React from 'react';
import "./FormPage.css";



function Signup() {
  return(
        <div className=" col-md-12 col row justify-content-center ">
            <form>
                <div className="form-group">
                <label htmlFor="first">First Name</label>
                <input type="text" 
                       className="form-control" 
                       id="fname-input" 
                       placeholder="Enter First Name"
                       
                />
                </div>

                <div className="form-group">
                <label htmlFor="last">Last Name</label>
                <input type="text" 
                       className="form-control" 
                       id="lname-input" 
                       placeholder="Enter Last Name"
                       
                />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" 
                       className="form-control" 
                       id="email-input" 
                       placeholder="Enter Email Address"
                       
                />
                </div>

                <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" 
                       className="form-control" 
                       id="phone-input" 
                       placeholder="Enter Phone Number"
                       
                />
                </div>
                
                <div className="form-group">
                    <label htmlFor="Pass">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password-input" 
                        placeholder=" Enter Password"
                    />
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Signup
                </button>
            </form>
        </div>
    )

}

export default Signup;