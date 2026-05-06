-- create a DB that shows a users and  the shows that are on their watchlists


CREATE DATABASE subscribers;

USE subscribers;
SHOW DATABASES;


-- create 3 tables 1 for users, 1 for the shows on platform and 1 for who is watching what. 
CREATE TABLE users(
user_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL UNIQUE  
);

CREATE TABLE watchlist(
show_id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(50) NOT NULL UNIQUE
);

-- see if the show has been added to watchlist
SELECT * FROM watchlist;

CREATE TABLE users_watchlist(
user_id INT,
show_id INT,
PRIMARY KEY (user_id, show_id), FOREIGN KEY(user_id)REFERENCES users(user_id),
FOREIGN KEY(show_id) REFERENCES watchlist(show_id)
);

 -- see if the users have been added to user_watchlist 
SELECT * FROM users_watchlist ORDER BY user_id;
 
-- insert the names of my users to the user table 
INSERT INTO users (name) VALUES
("Aretha Franklin"), ("Otis Redding"), ("Nina Simone"), ("Al Green"),
("Billie Holiday"), ("Etta James"), ("Minnie Riperton");


-- insert the shows mys users are watching into the watchlist table 
INSERT INTO watchlist (title) VALUES
("Girls"), ("The Originals"), ("The Pitt"), ("Grimm"), ("Abbott Elementary"),
("Grey's Anatomy"), ("The Big Bang Theory"), ("Charmed"), ("The Bear"), ("Suits");


-- connect my users to the shows they are each watching
INSERT INTO users_watchlist (user_id, show_id)
VALUES (1, 5), (1, 7), (1, 8),
(2, 3), (2, 10),
(3, 1), (3, 5), (3, 9),
(4, 4),(4, 7),(4, 9),(4, 10),
(5, 1), (5,3),(5, 5),
(6, 2), (6, 6), (6, 7),(6, 10),
(7,3 ), (7,4 ), (7,8 ), (7, 10);


