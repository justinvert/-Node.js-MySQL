var mysql = require('mysql');
var inquirer = require("inquirer");
var table = require("cli-table");
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
     selectOptions();
   });
 
   function selectOptions(){
     inquirer.prompt(
         {
           name: "select",
           type: "list",
           message: "Please select an option below.",
           choices: [
             "View Product Sales by Department",
             "Create New Department",
             "Exit."
           ]
         
       }).then(function(answer){
     console.log(answer);
 
     switch(answer.select){
 
       case "View Product Sales by Department":
       viewProducts();
       break;
 
       case "Create New Department":
       createDepartment();
       break;
     }
     });
     
   }

   function viewProducts(){

   }

   function createDepartment(){

}

   function exitList(){
    console.log("Thank you.")
    connection.end();
  }