import React, {useState, useEffect} from "react";
import axios from "axios";

import HeaderComponent from "../components/header";

function HomePage(){

  var [userData, setUserData] = useState([]);

  useEffect(() => {
    loadUserAPI();
  }, []);

  function loadUserAPI(){
    var url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then((success) => {
        var response = success.data;
        var userList = response.data;
        setUserData(userList);
      })
      .catch((failure) => {
        console.log(failure);
      });
  }

  function editProfile(value){
    var url = "https://reqres.in/api/users/" + value.id;
    var data = {
      "name": "morpheus",
      "job": "zion resident"
    };

    axios.put(url, data)
      .then((success) => {
        var response = success.data;
        console.log(response);
      })
      .catch((failure) => {
        console.log(failure);
        alert("Something went wrong, pls try later");
      })
  }
  
  function delelteProfile(value){
    var url = "https://reqres.in/api/users/" + value.id;
    
    axios.delete(url)
      .then((success) => {
        console.log(success);
        alert("Deleted is completed");
      })
      .catch((failure) => {
        console.log(failure);
        alert("Something went wrong, pls try later");
      })
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((value, index) => {
              return(
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email}</td>
                  <td>
                    <img src={value.avatar} alt="" className="circle-image"/>
                  </td>
                  <td>
                    <button onClick={() => editProfile(value)}>Edit</button>
                    <button onClick={() => delelteProfile(value)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
      </div>
    </div>
  )
}

export default HomePage;