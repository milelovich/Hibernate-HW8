create table if not exists products (id bigserial primary key, name varchar(255), score int);

insert into products (name, score)
values
('Milk', 100),
('Beer', 80),
('Apple', 45),
('Paper', 88),
('Meat', 33),
('Fish', 74),
('Liver', 60),
('Avocado', 34),
('Green', 51),
('Water', 28),
('Soda', 57),
('Berries', 23),
('Beef', 66),
('Vodka', 72),
('Cream', 54),
('Potato', 11),
('Tomato', 63),
('Carrot', 69),
('Lemon', 30),
('Tea', 90);