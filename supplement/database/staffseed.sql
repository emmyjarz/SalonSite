-- create email for each person first coz set email to unique

-- seed for marianne
insert into emails (email, createdAt, updatedAt) values ("marianne@test.com", now(), now());
insert into addresses  (address1, city, state, zip, createdAt, updatedAt) values("marianne test address","Sherman Oaks","CA", 91403, now(), now());
insert into phones (mobile, createdAt, updatedAt) values ("m777777777", now(), now());

insert into staffs (AddressId, EmailId, PhoneId, name,lastname,bio, createdAt, updatedAt) values ((SELECT id FROM Addresses WHERE address1="marianne test address"),(SELECT id FROM Emails WHERE email="marianne@test.com"),(SELECT id FROM Phones WHERE mobile="m777777777"),"Marianne","Rimawi","Marianne has been a hairstylist for over 20 years and a salon owner for the last decade. Her latest creation, opening Blvd 6 Salon with Christopher Rey, is the most exciting  addition on a spectacular career journey. She has appeared on TV as a hair stylist, featured in magazines and also taught her peers on stage and in salon. 
Marianne is a loving mother to her 11 yr old son and her two fur babies. She loves to explore California and the surrounding countries. If and when she has free time you can find her working out, having a relaxing treatment at the spa or reading a book.", now(), now());

-- seed for Christopher Rey 
insert into emails (email, createdAt, updatedAt) values ("chris@test.com", now(), now());
insert into addresses  (address1, city, state, zip, createdAt, updatedAt) values("chris test address","Sherman Oaks","CA", 91403, now(), now());
insert into phones (mobile, createdAt, updatedAt) values ("c777777777", now(), now());

insert into staffs (AddressId, EmailId, PhoneId, name,lastname,bio, createdAt, updatedAt) values ((SELECT id FROM Addresses WHERE address1="chris test address"),(SELECT id FROM Emails WHERE email="chris@test.com"),(SELECT id FROM Phones WHERE mobile="c777777777"),"Christopher","Rey","Christopher Rey has over 15 years experience in the hair industry. He specializes in helping clients achieve their hair goals and teaches them how to maintain their hair at home. Christopher Rey is certified in four different techniques and has 12 years of experience in utilizing extensions to cultivate versatile hairstyles for day to night looks. As a trained colorist, he has advanced experience working with red, blonde and brunette hues. 
Living outside of the Valley, as a West Hollywood resident, Rey has a passion for personal fitness and good food. He enjoys being a part of adrenaline pumping activities and participates in marathons and triathlons.", now(), now());

select * from salons;
select * from addresses;
select * from phones;
select * from emails;
select * from staffs;
select * from services;
select * from staff_services;

insert into staff_services (ServiceId, StaffId,performDate, createdAt, updatedAt) values (1, 2, now(),now(), now());
