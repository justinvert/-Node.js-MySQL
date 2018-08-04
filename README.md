# A Node.js & MySQL CLI App
*CLI - Command Line App*

## Overview
The purpose of this app is to create a simulated online store, similar to Amazon, that displays multiple items and allows users to interact with them. Each file has its own specific logic and through a variety of options, allows the user to decide what to do with the database(s) created with MySQL.

This app uses:</br>

 **[Node.js](https://nodejs.org/en/)** </br>
**[MySQL](https://www.mysql.com/)**
</br>
In order for the app to work, both of these must be installed. </br>
Further documentation is provided on each of their respective sites.

## Usage

Please perform a `git clone` to start. </br>

After you have done so and have navigated to the correct folder in your terminal, please type in the following command:

    npm install

This will install the [dependencies](https://docs.npmjs.com/files/package.json) needed for the app to work correctly.
</br>
**Notable dependencies used:**

    "console.table": "^0.10.0",
    
    "inquirer": "^6.0.0",
    
    "mysql": "^2.16.0"

## Customer.js
When run, this JavaScript file will show available items in the current database.</br>
<img src="./images/customer.js - 1.png"></br>
After the items have been displayed, the user is give the option to select an item by it's ID number, followed by a second prompt asking the quantity they are interested in. Once the user provides both of those answers, the app checks whether or not the item's quantity is able to return that value. If it does, the user is presented with a screen of the total it would cost should they decide to make that purchase.</br>
<img src="./images/customer.js - 2.png"></br>

The database at this point is updated, taking into account what was selected and updating the quantity for the item.</br>
<img src="./images/customer.js - 3.png"></br>
## Manager.js
The purpose of this JavaScript file is to act as a manager of the simulated store and to check the condtions for each of the items.</br>

Upon loading the file, the user is asked to select from the menu.</br>
<img src="./images/manager.js - 1.png"></br>
When the user picks `View Products for Sale` it will show the current products in a table.</br>
<img src="./images/manager.js - 2.png"></br>
The `View Low Inventory` displays all items which have five or few remaining in their inventory. </br>
<img src="./images/manager.js - 3.png"></br>
To update the amount with more for a specific item `Add to Inventory` is used.</br>
<img src="./images/manager.js - 4.png"></br>
If the manager decides there is a new product that they would like users to have access to, they can then use the `Add New Product` option.</br>
<img src="./images/manager.js - 5.png"></br>
<img src="./images/manager.js - 6.png"></br>
## Supervisor.js
The final JavaScript file for this app will show each of the products for sale by their department. </br>
<img src="./images/supervisor.js - 1.png"></br>
The user can also create a new department and assign it the proper overhead cost.</br>
<img src="./images/supervisor.js - 2.png"></br>
If the user simply wishes to exit the app, this JavaScript file (as well as manager.js) provides an `Exit.` option that will take the user back to the command line.</br>
<img src="./images/supervisor.js - 3.png"></br>
<img src="./images/supervisor.js - 4.png"></br>