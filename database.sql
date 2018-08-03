DROP DATABASE IF EXISTS storeDB;
CREATE DATABASE storeDB;

USE storeDB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(15),
    department_name VARCHAR(15),
    price DECIMAL(20,2),
    product_sales DECIMAL(20,2),
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

CREATE TABLE departments(
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(15),
    over_head_costs DECIMAL(20,2),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Candy", "Food", .50, 100);

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

SELECT * FROM products;