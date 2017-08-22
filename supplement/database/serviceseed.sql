USE salon_db;
INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Men's HC", "1hr", 70.00, 80.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Men's Clipper Cut", "1hr", 40.00, 50.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Women's Haircut", "1hr", 85.00, 105.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Single process", "1hr", 75.00, 90.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Highlight (part)", "1hr", 125.00, 150.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Highlight (full)", "1hr", 160.00, 185.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Blow dry", "1hr", 45.00, 60.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Color Correction", "1hr", 90.00, 105.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Perm", "1hr", 130.00, 150.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Updo Styling", "1hr", 80.00, 95.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Conditioning Treatments (take home included", "1hr", 45.00, 55.00, 30, "", "", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, comment, createdAt, updatedAt) VALUES ("Kids Haircut", "1hr", 35.00, 45.00, 30, "", "", now(), now());

select * from salons;
select * from addresses;
select * from phones;
select * from emails;
select * from services;