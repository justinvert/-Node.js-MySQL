var mysql = require('mysql');
var inquirer = require("inquirer");
var table = require("console.table")
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

       case "Exit.":
       exitList();
       break;
     }
     });
     
   }

   function viewProducts(){
// var query = 'SELECT * FROM departments';
var query = "SELECT departments.department_id, departments.department_name, departments.over_head_costs  ";
      query += "FROM departments";

//The query must SELECT the product_sales from the products database.
//The SUM is the product_sales - over_head_cost
//The departments and products are joined, as they both have the same department_name column

connection.query(query, function(err, res) {
console.table(res)
console.log("\n");
selectOptions(); 
    });


   }

   function createDepartment(){
    inquirer.prompt([
      {
        name: "department",
        type: "input",
        message: "Please enter the new department name: ",
        validate: function validateName(name){
          return name !== '';
      }
      },
      {
        name: "cost",
        type: "input",
        message: "Please enter the new overhead cost: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
        }
        
      
    
    ]).then(function(answer){
   
      var newDepartment = answer.department;
      var newCost = answer.cost;
    
        var query = connection.query("INSERT INTO departments(department_name, over_head_costs) VALUES (? , ?)",
        [
          newDepartment,
          newCost

    ],
       function(err, res){
        console.log("Added")
        
    console.log("\n");
    selectOptions();
        })
    
        });
         
    }

   function exitList(){
    console.log("Thank you.")
    connection.end();
  }