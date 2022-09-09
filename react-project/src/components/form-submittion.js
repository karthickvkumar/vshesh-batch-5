import React from "react";

function FormSubmittion(){
  return(
    <div className="form-content">
      <div className="space">
        <label className="label">Enter your Name</label>
        <input type="text" className="input"/>
      </div>
      <div className="space">
        <label className="label">Enter your Password</label>
        <input type="password" className="input"/>
      </div>
      <button className="button">Sumbit</button>
    </div>
  )
}

export default FormSubmittion;