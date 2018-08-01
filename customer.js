var mysql = require('mysql');
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

    afterConnection();
  });
  
function afterConnection() {
 connection.query("SELECT * FROM products", function(err, res) {
    if (err)
    throw err;
    console.log(res);

  connection.end();
   });
  }
  