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

      case "View Low Inventory":
      lowInventory();
      break;

      case "Add to Inventory":
      addtoInventory();
      break;

      case "Add New Product":
      newProduct();
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
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log ("The following products are low on inventory: \n")
for (var i = 0; i < res.length; i++) {
  if (res[i].stock_quantity <= 5){
    console.log (res[i].item_id + ". " + res[i].product_name )
  }
}
console.log("\n");
selectProduct();
});
    
  }

  function addtoInventory(){
    inquirer.prompt([
      {
        name: "item",
        type: "input",
        message: "What is the ID of the item you would like to update?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "inventory",
        type: "input",
        message: "Please provide the new quantity.",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
        
      }
    
    ]).then(function(answer){
   
      var itemSelect = parseInt(answer.item);
      var inputAmount = parseInt(answer.inventory);
      var query =  "SELECT * FROM products";
      
      connection.query(query, function(err, res){
      
    });
      connection.query("UPDATE products SET stock_quantity = stock_quantity + ?  WHERE item_id = ?",
        [
          inputAmount
          ,itemSelect
      
    ], function(err, res){
      console.log("Inventory updated for item #" + itemSelect)
      
  console.log("\n");
    selectProduct();
      })
  
      });
       
  }
  
  function newProduct(){
    inquirer.prompt([
      {
        name: "item",
        type: "input",
        message: "What item would you like to add?"
      },
      {
        name: "inventory",
        type: "input",
        message: "What is the quantity of this item? (Integers only)"
        
      },
      {
        name: "department",
        type: "input",
        message: "What department is it in?"
        
      },
      {
        name: "price",
        type: "input",
        message: "What is the price of it? (Integers only)"
        
      }
    ]).then(function(answer){
      connection.query(
        "INSERT INTO products SET ?",
        {
          product_name: answer.item,
          department_name: answer.department,
          price: answer.price,
          stock_quantity: answer.inventory
        },
        function(err, res) {
          
        
      });
    });
  }
  function exitList(){
    console.log("Thank you.")
    connection.end();
  }