import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import HeaderComponent from "../components/header";

function LoginPage(){

  var [form, setForm] = useState({
    email: "",
    password: ""
  });

  var navigate = useNavigate();

  function onSubmit(){
    // console.log(form);
    var url = "https://reqres.in/api/login";

    axios.post(url, form)
      .then((success) => {
        var response = success.data;
        console.log(response);
        // alert("Successfully Logged in");
        navigate("/about");
      })
      .catch((failure) => {
        console.log(failure);
        alert("Invalid Email or Password");
      })
  }

  function onHandleInput(event){
    // console.log(event.target.value);
    setForm({...form, [event.target.name] : event.target.value});
  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Login Page</h1>
      <div>
        <label>Enter Email ID</label>
        <input type="email" placeholder="Please enter email" onChange={onHandleInput} name="email"/>
      </div>
      <div>
        <label>Enter Password</label>
        <input type="password" placeholder="Please enter password" onChange={onHandleInput} name="password"/>
      </div>
      <div>
        <button onClick={() => onSubmit()}>Login</button>
      </div>
    </div>
  )
}

export default LoginPage;