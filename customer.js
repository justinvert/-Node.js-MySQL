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
    searchItems();
    // afterConnection();
  });


  function searchItems(){
    inquirer.prompt([
        {
        name: "item",
        type: "input",
        message: "Which item would you like to search? (Item ID only) "
    },
        {
        name: "amount",
        type: "input",
        message: "Please enter the quantity you would like (Integers only) "
        }
    ]).then(function(answer){

var inputAmount = answer.amount;
        var itemSelect = answer.item;
var query = 'SELECT * FROM products WHERE ?';
connection.query(query,{
    item_id: itemSelect
}
, function(err, res){
    for (var i = 0; i < res.length; i++){
        var priceUpdate = res[i].price * inputAmount;
        var newQuantity = res[i].stock_quantity - inputAmount;

        console.log("You chose the item: " + res[i].product_name);
        console.log("The current quantity is: " + res[i].stock_quantity);
        console.log("The price per quantity is: " + res[i].price.toFixed(2));
        console.log("\nThe price amount for your quantity is: " + priceUpdate.toFixed(2));
        console.log("The new quantity is: " + newQuantity)

    if (inputAmount > res[i].stock_quantity){
        console.log("Insufficient quantity!");

    }
    else if (inputAmount < res[i].stock_quantity){
        console.log("The quantity you will recieve is: " + inputAmount);
        var query = connection.query(
            "UPDATE products SET ? WHERE ?",
            [{
                stock_quantity: res[i].stock_quantity - inputAmount, 
            },
        {
            item_id: itemSelect
        }],
            function (err, res){
                console.log(res.affectedRows + " item updated")
            }
          )
    }
}
})


    });
  }
  
function afterConnection() {
 connection.query("SELECT * FROM products", function(err, res) {
    if (err)
    throw err;
    console.log(res);
 
  connection.end();
   });
  }
  