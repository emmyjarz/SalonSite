USE salon_db;
INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Men's Haircut", "1hr", 70.00, 80.00, 30, "", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a cursus tellus. Quisque id tellus eget purus pharetra dignissim. Donec dignissim tincidunt tempus. Vivamus porttitor eros sed laoreet lacinia.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Men's Clipper Cut", "1hr", 40.00, 50.00, 30, "", "Vivamus sagittis sapien vitae mauris lobortis gravida. Morbi eleifend vel dui sed consectetur. Nullam ut tellus enim. Ut commodo vehicula metus. Etiam ac scelerisque leo, ut condimentum dui.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Women's Haircut", "1hr", 85.00, 105.00, 30, "", "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vulputate rhoncus tempus. Aenean auctor sagittis mi, sed elementum odio.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Color (single process)", "1hr", 75.00, 90.00, 30, "", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis, nisl vitae congue bibendum, leo leo fermentum enim, non feugiat mi nulla sed urna. Phasellus feugiat felis non sapien imperdiet pulvinar.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Highlight (partial)", "1hr", 125.00, 150.00, 30, "", "Sed dignissim fermentum risus, sit amet pretium augue pretium sit amet. Phasellus scelerisque auctor metus, eget lobortis nisi venenatis eu.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Highlight (full)", "1hr", 160.00, 185.00, 30, "", "Donec tellus mauris, pretium suscipit scelerisque vitae, mollis vel ex. Nulla suscipit semper lacus, sed fringilla ex dictum a. Ut pharetra tincidunt commodo. Aenean vitae arcu sed mauris volutpat rutrum eu id magna. Nulla volutpat velit eget varius varius.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Blow dry", "1hr", 45.00, 60.00, 30, "", "Fusce fermentum iaculis nunc sed venenatis. Mauris malesuada quis risus sagittis aliquet. Etiam pellentesque ultricies nisi, at gravida odio interdum eget. Nunc rhoncus pulvinar leo imperdiet egestas.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Color Correction", "1hr", 90.00, 105.00, 30, "", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie magna eu consequat scelerisque. Nunc quis eleifend mi, eu elementum nulla. Mauris elementum, risus id dapibus elementum, sem ligula dictum erat, in pharetra purus mi non diam.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Perm", "1hr", 130.00, 150.00, 30, "", "Mauris ac lorem dui. Cras arcu erat, scelerisque eget porttitor at, pretium id metus. Curabitur eget consectetur justo.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Updo Styling", "1hr", 80.00, 95.00, 30, "", "Nunc tincidunt nibh orci, eget vehicula nisl pretium sed. Proin nec orci sit amet eros gravida sodales non sed turpis.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Conditioning Treatments (take home included)", "1hr", 45.00, 55.00, 30, "", "Sed dignissim, justo ac venenatis blandit, urna purus egestas nunc, id pharetra arcu erat eu metus.", now(), now());

INSERT INTO services (name, duration, member_price, nonmember_price, cost, photo, description, createdAt, updatedAt) VALUES ("Children's Haircut", "1hr", 35.00, 45.00, 30, "", "Fusce nulla leo, venenatis vel massa quis, fringilla malesuada diam. Proin ultricies purus nibh, eget fringilla lorem auctor nec.", now(), now());

select * from salons;
select * from addresses;
select * from phones;
select * from emails;
select * from services;