import React from "react";

function FormSubmittion(){
  
  function onLogin(){
    alert("Hey your aboout the submit the login form");
  }

  function onHandleInput(event){
    console.log(event.target.value);
  }
  
  return(
    <div className="form-content">
      <div className="space">
        <label className="label">Enter your Name</label>
        <input type="text" className="input" onChange={onHandleInput}/>
      </div>
      <div className="space">
        <label className="label">Enter your Password</label>
        <input type="password" className="input" onChange={onHandleInput}/>
      </div>
      <button className="button" onClick={() => onLogin() }>Sumbit</button>
    </div>
  )
}

export default FormSubmittion;