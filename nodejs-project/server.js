var express = require("express");
var cors = require("cors");
var mysql = require("mysql");

var app = express();
var http = require("http").createServer(app);

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "*"
}));

var connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "wym4khPjwJ",
  password: "IpVePeo1GV",
  database: "wym4khPjwJ",
  port: 3306
});

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MYSQL Database is connected successfully");
  }
})

// http://localhost:4000/user/list
app.get("/user/list", (request, response) => {
  var sql_query = `SELECT * FROM karthick_kumar`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
})

// http://localhost:4000/user/create
app.post("/user/create", (request, response) => {
  var firstName = request.body.first_name;
  var lastName = request.body.last_name;
  var emailID = request.body.email_id;
  var age = request.body.age;
  var mobileNumber = request.body.mobile_number;

  var sql_query = `INSERT INTO karthick_kumar (first_name, last_name, email_id, age, mobile_number) VALUES ('${firstName}', '${lastName}', '${emailID}', ${age}, ${mobileNumber})`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        serverResult: result,
        message: "User profile has been created successfully"
      });
    }
  })

})

// http://localhost:4000/user/edit/1
app.put("/user/edit/:id", (request, response) => {
  var firstName = request.body.first_name;
  var lastName = request.body.last_name;
  var emailID = request.body.email_id;
  var age = request.body.age;
  var mobileNumber = request.body.mobile_number;

  var id = request.params.id;

  var sql_query = `UPDATE karthick_kumar SET first_name='${firstName}', last_name='${lastName}', email_id='${emailID}', age=${age}, mobile_number=${mobileNumber} WHERE id=${id}`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        serverResult: result,
        message: "User profile has been modified successfully"
      });
    }
  })

})

// http://localhost:4000/user/delete/1
app.delete("/user/delete/:id", (request, response) => {
  var id = request.params.id;

  var sql_query = `DELETE FROM karthick_kumar WHERE id=${id}`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send({
        serverResult: result,
        message: "User profile has been deleted successfully"
      });
    }
  })
})



http.listen(4000, () => {
  console.log("Node JS Server is running...");
})