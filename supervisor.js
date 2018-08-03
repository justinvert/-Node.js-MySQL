var mysql = require('mysql');
var inquirer = require("inquirer");
var Table = require("cli-table");
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
     }
     });
     
   }

   function viewProducts(){
var query = "SELECT department_id, department_name, over_head_costs "
query+= " FROM departments INNER JOIN products ON  department.department_name = products.department_name";

var table = new Table({
    head: ['ID', 'Department', "Costs", "Total Sales"]
  , colWidths: [10, 20,10,20]
});
connection.query(query, function(err, res) {
console.table(res)
    
      
        for (var i = 0; i < res.length; i++){
        
            a = res[i].department_id;
            b = res[i].department_name;
            c = res[i].over_head_costs;
            d = res[i].department_name;
           table.push(
                [a, b, c, d]
            );

        }
               console.log(table.toString());

  
    });
    
      

   }

   function createDepartment(){

}

   function exitList(){
    console.log("Thank you.")
    connection.end();
  }