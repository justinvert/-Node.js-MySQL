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
console.log(answer.amount)
        var itemSelect = answer.item;
var query = 'SELECT * FROM products WHERE ?';
connection.query(query,{
    item_id: itemSelect
}
, function(err, res){
    for (var i = 0; i < res.length; i++){
        console.log("You chose the item: " + res[i].product_name)
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
  