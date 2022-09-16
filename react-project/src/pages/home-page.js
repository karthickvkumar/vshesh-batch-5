import React from "react";
import axios from "axios";

import HeaderComponent from "../components/header";

function HomePage(){

  function loadUserAPI(){
    var url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then((success) => {
        var response = success.data;
        var userList = response.data;
        console.log(userList);
      })
      .catch((failure) => {
        console.log(failure);
      });
  }

  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>This is a HOME PAGE</h1>
      <button onClick={() => loadUserAPI()}>Load User Informations</button>
      <div>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default HomePage;