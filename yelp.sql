CREATE DATABASE yelp;

CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NUll,
    price_range INT NOT NULL CHECK(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (name, location, price_range) VALUES ('Mcdonalds', 'New Yorks', 3);
INSERT INTO restaurants (name, location, price_range) VALUES ('PizzaHut', 'Vegas', 2);
SELECT * FROM restaurants;
SELECT id, name FROM restaurants;