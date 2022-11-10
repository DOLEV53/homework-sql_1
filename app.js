const express = require('express') 
const app = express();
const mysql = require("mysql");
const { join } = require("path");
const port = 3000;


// conection betweem mysql to vscode
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cars",
});




let insertCars =()=>{
let inserCar = `INSERT INTO cars_1(\`id\`, \`carName\`, \`Model\`)
VALUES("", "Bmw","2012")`;

connection.query(inserCar,(err,result)=>{
if(err) console.log(err);
console.log(result);
  });
};  

//insertCars();



const selectCars = () => {
    let query1 = `SELECT * FROM cars_1`;

connection.query(query1, (err, result) => {
    if (err) console.log(err);
    console.log(result);
 });
};

selectCars();