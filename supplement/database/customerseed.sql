USE salon_db;

-- describe salons;

select * from salons;
select * from addresses;
select * from phones;
select * from emails;
select * from customers;
select * from staffs;

-- insert info the main table first (we set email to be unique)

insert into emails (email, createdAt, updatedAt) values ("emmy@gmail.com", now(), now());
insert into addresses  (address1, address2, city, state, zip, createdAt, updatedAt) values("123 test ave","Suite 6, 222", "Sherman Oaks","CA", 91403, now(), now());
insert into phones (mobile, home, createdAt, updatedAt) values ("e777777777", "", now(), now());

insert into customers (AddressId, EmailId, PhoneId, name, lastname,password, gender, balance,lastvisit, photo,comment, createdAt, updatedAt) values ((SELECT id FROM Addresses WHERE address1="123 test ave"),(SELECT id FROM Emails WHERE email="emmy@gmail.com"),(SELECT id FROM Phones WHERE mobile="e777777777"),"emmy","jarz", "password","", 5, now(), "","", now(), now());