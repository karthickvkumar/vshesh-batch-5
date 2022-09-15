import React, {useState} from "react";

import HeaderComponent from "../components/header";

function RegisterPage(){

  var [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    emailID: "",
    password: "",
    data_of_birth: "",
    gender: "",
    hobbies: [],
    qualification: "",
    address: "",
    city: ""
  });

  function submitRegisterForm(){
    console.log(registerForm);
  }

  function onHandlineFormField(event){
    if(event.target.name == "hobbies"){
      if(event.target.checked){
        registerForm.hobbies.push(event.target.value);
      }else{
        var index = registerForm.hobbies.indexOf(event.target.value);
        registerForm.hobbies.splice(index, 1);
      }
      setRegisterForm({...registerForm, [event.target.name] : registerForm.hobbies});
    }
    else{
      setRegisterForm({...registerForm, [event.target.name] : event.target.value});
    }
  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Register Page</h1>
      <div className="row">
        <div className="section">
          <label className="form-label">Enter First Name</label>
          <input type="text" placeholder="First Name" onChange={onHandlineFormField} name="firstName"/>
        </div>
        <div className="section"> 
          <label className="form-label">Enter Last Name</label>
          <input type="text" placeholder="Last Name" onChange={onHandlineFormField} name="lastName"/>
        </div>
      </div>
      <div className="section">
        <label className="form-label">Enter Email ID</label>
        <input type="email" placeholder="Email ID" onChange={onHandlineFormField} name="emailID"/>
      </div>
      <div className="section">
        <label className="form-label">Enter Password</label>
        <input type="password" placeholder="Password" onChange={onHandlineFormField} name="password"/>
      </div>
      <div className="section">
        <label className="form-label">Select Date Of Birth</label>
        <input type="date" onChange={onHandlineFormField} name="data_of_birth"/>
      </div>
      <div className="section">
        <label className="form-label">Select your Gender</label>
        <input type="radio" onChange={onHandlineFormField} name="gender" value="Male"/>Male
        <input type="radio" onChange={onHandlineFormField} name="gender" value="Female"/>Female
        <input type="radio" onChange={onHandlineFormField} name="gender" value="Others"/>Others
      </div>
      <div className="section">
        <label className="form-label">Select Hobbies</label>
        <input type="checkbox" onChange={onHandlineFormField} value="Cricket" name="hobbies"/>Cricket
        <input type="checkbox" onChange={onHandlineFormField} value="Football" name="hobbies"/>Football
        <input type="checkbox" onChange={onHandlineFormField} value="Hockey" name="hobbies"/>Hockey
        <input type="checkbox" onChange={onHandlineFormField} value="Caramboard" name="hobbies"/>Caramboard
        <input type="checkbox" onChange={onHandlineFormField} value="Vollyball" name="hobbies"/>Vollyball
        <input type="checkbox" onChange={onHandlineFormField} value="Chess" name="hobbies"/>Chess
      </div>
      <div className="section">
        <label className="form-label-big">Select your Qualification</label>
        <select defaultValue={""} onChange={onHandlineFormField} name="qualification">
          <option disabled value="">Please select your degree</option>
          <option>BSC Arts</option>
          <option>BE Engineering</option>
          <option>IT Communication</option>
          <option>BE Mechanical</option>
        </select>
      </div>
      <div className="section">
        <label className="form-label">Enter Address</label>
        <textarea placeholder="Address" onChange={onHandlineFormField} name="address"></textarea>
      </div>
      <div className="section">
        <label className="form-label">Select your City</label>
        <select defaultValue={""} onChange={onHandlineFormField} name="city">
          <option disabled value="">Please select any one city</option>
          <option>Chennai</option>
          <option>Banglore</option>
          <option>Pune</option>
          <option>Mumbai</option>
          <option>Jaipur</option>
          <option>Delhi</option>
        </select>
      </div>
      <div className="section">
        <button onClick={() => submitRegisterForm()}>Submit Register Form</button>
      </div>
    </div>
  )
}

export default RegisterPage;