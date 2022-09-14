import React from "react";

import HeaderComponent from "../components/header";

function RegisterPage(){
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Register Page</h1>
      <div className="row">
        <div className="section">
          <label className="form-label">Enter First Name</label>
          <input type="text" placeholder="First Name"/>
        </div>
        <div className="section"> 
          <label className="form-label">Enter Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className="section">
        <label className="form-label">Enter Email ID</label>
        <input type="email" placeholder="Email ID"/>
      </div>
      <div className="section">
        <label className="form-label">Enter Password</label>
        <input type="password" placeholder="Password"/>
      </div>
      <div className="section">
        <label className="form-label">Select Date Of Birth</label>
        <input type="date"/>
      </div>
      <div className="section">
        <label className="form-label">Select your Gender</label>
        <input type="radio"/>Male
        <input type="radio"/>Female
        <input type="radio"/>Others
      </div>
      <div className="section">
        <label className="form-label">Select Hobbies</label>
        <input type="checkbox"/>Cricket
        <input type="checkbox"/>Football
        <input type="checkbox"/>Hockey
        <input type="checkbox"/>Caramboard
        <input type="checkbox"/>Vollyball
        <input type="checkbox"/>Chess
      </div>
      <div className="section">
        <label className="form-label-big">Select your Qualification</label>
        <select>
          <option disabled selected>Please select your degree</option>
          <option>BSC Arts</option>
          <option>BE Engineering</option>
          <option>IT Communication</option>
          <option>BE Mechanical</option>
        </select>
      </div>
      <div className="section">
        <label className="form-label">Enter Address</label>
        <textarea placeholder="Address"></textarea>
      </div>
      <div className="section">
        <label className="form-label">Select your City</label>
        <select>
          <option disabled selected>Please select any one city</option>
          <option>Chennai</option>
          <option>Banglore</option>
          <option>Pune</option>
          <option>Mumbai</option>
          <option>Jaipur</option>
          <option>Delhi</option>
        </select>
      </div>
      <div className="section">
        <button>Submit Register Form</button>
      </div>
    </div>
  )
}

export default RegisterPage;