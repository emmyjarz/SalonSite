-- DROP DATABASE IF EXISTS salon_db;
-- CREATE DATABASE salon_db;
USE salon_db;

describe salons;

select * from salons;
select * from addresses;
select * from phones;
select * from emails;

-- delete from salons where id = 2;

-- insert info the main table first

insert into addresses  (address1, city, state, zip, createdAt, updatedAt) values("14708 Ventura Blvd","Sherman Oaks","CA", 91403, now(), now());
insert into emails (email, createdAt, updatedAt) values ("blvd6salon@gmail.com", now(), now());
insert into phones (mobile, createdAt, updatedAt) values ("3236877190", now(), now());


insert into salons (AddressId, EmailId, PhoneId, name,password,description, createdAt, updatedAt) values ((SELECT id FROM Addresses WHERE address1="14708 Ventura Blvd"),(SELECT id FROM Emails WHERE email="blvd6salon@gmail.com"),(SELECT id FROM Phones WHERE mobile="3236877190"),"Blvd6 Salon","password","test", now(), now());






-- show columns from salons;