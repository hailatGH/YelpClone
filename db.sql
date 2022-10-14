-- Websites 
https://www.postgresql.org/docs/current/index.html
https://www.postgresqltutorial.com/

-- Commands
\? -- For help
\q -- Quit

-- Database
CREATE DATABASE practice; -- Create new database practice
\l -- List databases
\c practice -- connect to practice database 
DROP DATABASE practice; -- Drop the practice database

-- Table
CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale BOOLEAN  
);
\d -- List of tables
\d products -- Show products table
ALTER TABLE products ADD COLUMN featured BOOLEAN; -- Add new featured column to products table
ALTER TABLE products DROP COLUMN featured; -- Drop column featured from products table
DROP TABLE products; -- Drop the table products