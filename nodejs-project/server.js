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


http.listen(4000, () => {
  console.log("Node JS Server is running...");
})