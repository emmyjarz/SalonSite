-- DROP DATABASE IF EXISTS salon_db;
-- CREATE DATABASE salon_db;
USE salon_db;

describe salons;

select * from salons;
select * from addresses;
select * from phones;
select * from emails;

-- insert info the main table first (we set email to be unique)

insert into emails (email, createdAt, updatedAt) values ("blvd6salon@gmail.com", now(), now());
insert into addresses  (address1, address2, city, state, zip, createdAt, updatedAt) values("14708 Ventura Blvd","Suite 6, 222", "Sherman Oaks","CA", 91403, now(), now());
insert into phones (mobile, home, createdAt, updatedAt) values ("3236877190","7777777777", now(), now());

insert into salons (AddressId, EmailId, PhoneId, name,password,description, createdAt, updatedAt) values ((SELECT id FROM Addresses WHERE address1="14708 Ventura Blvd"),(SELECT id FROM Emails WHERE email="blvd6salon@gmail.com"),(SELECT id FROM Phones WHERE mobile="3236877190"),"Blvd6 Salon","password","We at Blvd 6 Salon want to make a positive and lasting impression while bringing you the highest quality in hair services, professional products and individual attention. 
By demonstrating healthy hair habits and setting achievable hair goals with the most professional hair care products, clients are well equipped to maintain long lasting, lustrous locks at home.
In addition, we're very proud to be a Green Circle Salon, participating in the most environmentally friendly salon practices in the world. After all, impressions matter and we at Blvd 6 Salon strive to leave a lasting footprint that's positively beautiful.
", now(), now());






-- show columns from salons;