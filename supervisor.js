var mysql = require('mysql');
var inquirer = require("inquirer");
var table = require("console.table");
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
var a;
var b;
    connection.query(" SELECT * FROM departments JOIN products.product_sales",
// SELECT departments.department_id, departments.department_name, products.product_sales FROM departments

function(err, res) {

    
        console.table(res)
        for (var i = 0; i < res.length; i++){
        
            a = res[i].department_id;
            b = res[i].department_name;
        }console.table([
        {
         department_id: a,
         
         
        }, {
            department_name: b,
       
        }, {
            over_head_costs: a,
            
          }, {
            product_sales: 'product_sales',
            
          }, {
            total_profit: 'total_profit',
            
          }
      ]);
    });
    
      

   }

   function createDepartment(){

}

   function exitList(){
    console.log("Thank you.")
    connection.end();
  }