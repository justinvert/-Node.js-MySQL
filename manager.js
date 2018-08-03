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
            "Add New Product",
            "Exit."
          ]
        
      }).then(function(answer){
    console.log(answer);

    switch(answer.select){

      case "View Products for Sale":
      viewProducts();
      break;

      case "Exit.":
      exitList();
      break;
    }
    });
    
  }


  function viewProducts(){
    connection.query("SELECT * FROM products", function(err, res) {
             if (err) throw err;

      for (var i = 0; i < res.length; i++) {
        console.log("\n" + res[i].item_id + ". " + res[i].product_name 
        + "\n Price: "+ res[i].price 
        + "\n Quantity: " + res[i].stock_quantity);
        
      }
      console.log("\n");
      selectProduct();
    });
 
  }


  
  function lowInventory(){
    
  }

  function addtoInventory(){
    
  }

  function newProduct(){
    
  }

  function exitList(){
    console.log("Thank you.")
    connection.end();
  }