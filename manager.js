var mysql = require('mysql');
var inquirer = require("inquirer");
var password = require('./password/password.js');

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: password.password.password,
  database: "storeDB"
});

connection.connect(function(err) {
   if (err)
   throw err;
    console.log("Connection as " + connection.threadId);
    selectProduct();
  });

  function selectProduct(){
    inquirer.prompt(
        {
          name: "select",
          type: "list",
          message: "Please select an option below.",
          choices: [
            "View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product"
          ]
        
      }).then(function(answer){
    console.log (answer);
    });
    connection.end();
  }