import React, {useState} from "react";

function FormSubmittion(){

  var [loginFrom, setLoginForm] = useState({
    username : "",
    password: ""
  });
  
  function onLogin(){
    alert(loginFrom.username + " " + loginFrom.password);
  }

  function onHandleInput(event){
    // console.log(event.target.value, event.target.name);
    setLoginForm({...loginFrom, [event.target.name] : event.target.value });
  }
  
  return(
    <div className="form-content">
      <div className="space">
        <label className="label">Enter your Name</label>
        <input type="text" className="input" onChange={onHandleInput} name="username"/>
      </div>
      <div className="space">
        <label className="label">Enter your Password</label>
        <input type="password" className="input" onChange={onHandleInput} name="password"/>
      </div>
      <button className="button" onClick={() => onLogin() }>Sumbit</button>
      <div>
        <h2>The username is {loginFrom.username}</h2>
        <h2>The password is {loginFrom.password}</h2>
      </div>
    </div>
  )
}

export default FormSubmittion;