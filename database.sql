DROP DATABASE IF EXISTS storeDB;
CREATE DATABASE storeDB;

USE storeDB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(15),
    department_name VARCHAR(15),
    price DECIMAL(20,2),
    stock_quantity INT NULL,
    product_sales DECIMAL(20,2),
    PRIMARY KEY (item_id)
);

CREATE TABLE departments(
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(15),
    over_head_costs DECIMAL(20,2),
    PRIMARY KEY (department_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUE ("Candy", "Food", .50, 100, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Learning MySQL", "Books", 10.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Shampoo", "Beauty", 10.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Shirt", "Clothing", 5.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Video Game", "Gaming", 20.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Keyboard", "Computers", 15.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Water Filter", "Kitchen", 10.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Image Editor", "Software", 20.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Paper", "Office Supplies", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Headphones", "Music", 15.00, 50);


INSERT INTO departments (department_name, over_head_costs)
VALUE ("Gaming", 1000);

INSERT INTO departments (department_name, over_head_costs)
VALUE ("Music", 2000);

INSERT INTO departments (department_name, over_head_costs)
VALUE ("Office Supplies", 3000);

INSERT INTO departments (department_name, over_head_costs)
VALUE ("Software", 4000);

INSERT INTO departments (department_name, over_head_costs)
VALUE ("Food", 5000);

INSERT INTO departments (department_name, over_head_costs)
VALUE ("Books", 6000);

INSERT INTO departments (department_name, over_head_costs)
VALUE ("Clothing", 7000);

INSERT INTO departments (department_name, over_head_costs)
VALUE ("Beauty", 8000);

INSERT INTO departments (department_name, over_head_costs)
VALUE ("Kitchen", 9000);

INSERT INTO departments (department_name, over_head_costs)
VALUE ("Computers", 10000);


SELECT * FROM products;

SELECT * FROM departments;

