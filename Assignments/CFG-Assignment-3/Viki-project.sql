/* Assignment 3: streaming site.
 organise shows by release_date,
 rating and genre.
  MySQL script solves makes sure users
  can find the highest rated drama.
    */

-- Create my database for streaming site.
CREATE DATABASE Kdrama_app;

-- SHOW DATABASES; (checking if database was created)
USE Kdrama_app; 

-- dropped already existing tables to edit and rerun them
 -- DROP TABLE IF EXISTS dramas;
 -- DROP TABLE IF EXISTS dramas_genres;
 -- DROP TABLE IF EXISTS genres;

-- Create table to store the genres of dramas.
-- each genre will have an ID and a unique name with no duplicates. 
CREATE TABLE genres (
genre_id INT PRIMARY KEY AUTO_INCREMENT,
genre_name VARCHAR(20) NOT NULL UNIQUE
);

-- A table to store info about the dramas (realse date, title, episodes and rating )
-- check constraints to ensure valid data.
CREATE TABLE dramas(
drama_id INT PRIMARY KEY AUTO_INCREMENT, 
title VARCHAR(100) NOT NULL,
release_date Date,
episodes INT CHECK (episodes > 0),
rating DECIMAL(3,1) CHECK (rating BETWEEN 0 AND 10 )
);

-- Create a table to connect dramas and genres using foreign keys.
CREATE TABLE dramas_genres(
drama_id INT,
genre_id INT,
PRIMARY KEY (drama_id, genre_id),FOREIGN KEY(drama_id) REFERENCES dramas(drama_id),
FOREIGN KEY(genre_id) REFERENCES genres(genre_id)
);
 
-- insert genres into table
INSERT INTO genres (genre_name) VALUES
('Historical'),('Fantasy'),('Melodrama'),('Romance'),('Comedy'),('Thriller'),('Mystery'), ('Action');

-- using select to check if my genres were inserted. 
SELECT *FROM genres;

-- insert drama titles, release dates, number of episodes and ratings.
INSERT INTO dramas (title, release_date, episodes, rating)
VALUES 
('Mr. Queen', '2020-03-02', 20, 9.7),
('Knight Flower', '2023-06-29' , 16, 8.6),
('Lovely Runner', '2024-03-04', 16, 9.8),
('While You Were Sleeping', '2017-05-18', 16, 9.6),
('The Judge Returns', '2022-09-06', 16, 9.1),
('The Penthouse', '2018-07-26', 30, 8.1), 
('To My Beloved Thief', '2025-02-12', 16, 9.5),
('Mouse', '2021-08-05', 23, 9.6),
('Perfect Marriage Revenge', '2023-09-08', 12, 9.6),
('Friendly Rivalry', '2025-07-27', 16, 9.7);

-- using select to check if my dramas where inserted.
SELECT *FROM dramas;

-- create relationships between dramas and genres.
INSERT INTO dramas_genres (drama_id, genre_id)
VALUES (1, 1), (1, 2), (1, 5),
(2, 1), (2, 4), (2, 5),(2,8),
(3, 2), (3, 4), (3, 5),
(4, 2), (4, 3),
(5, 2), (5, 6), (5, 7),
(6, 6), (6, 7),
(7, 1), (7, 2),(7, 4),
(8, 6), (8, 7), (8,8),
(9, 2), (9, 3),(9, 4),
(10, 6), (10, 7);

-- using select to check if genres were inserted.
SELECT *FROM dramas_genres;

-- join to get data froom the 3 tables.
-- join to show each drama with it's assigned genre names. 
SELECT dramas.title, genres.genre_name
FROM dramas 
JOIN dramas_genres
ON dramas.drama_id = dramas_genres.drama_id
JOIN genres
ON dramas_genres.genre_id = genres.genre_id; 


-- use procedure to display all dramas and use it query database 
-- show highest rated to lowest rated drama. 
DELIMITER //
CREATE PROCEDURE get_top_dramas()
BEGIN 
	SELECT title, rating
    FROM dramas
    ORDER BY rating DESC;
END //


DELIMITER ;

-- run the procedure and show the dramas from highest rated to lowest. 
CALL get_top_dramas();

-- sort dramas from highest rating to lowest.
SELECT title, rating 
FROM dramas
ORDER BY rating DESC;

-- Use join to check relationships between tables.  
-- between the tables is working.
SELECT title, rating, episodes
FROM dramas 
JOIN dramas_genres ON dramas.drama_id = dramas_genres.drama_id 
ORDER BY title;

-- query: to show title, release date and rating 
-- only show dramas with rating greater than 9.1 order dramas using DESC
SELECT title, release_date, rating
FROM dramas 
WHERE rating > 9.1
ORDER BY release_date DESC;

-- use query to see how many dramas are in each genre using COUNT. 
-- use DESC to order list from most popular genre to least. 
SELECT genre_name, COUNT(drama_id) AS drama_count
FROM genres
LEFT JOIN dramas_genres ON genres.genre_id = dramas_genres.genre_id
GROUP BY genres.genre_name
ORDER BY drama_count DESC;

-- use functions and show results.  
-- 1. to calculate the average rating all the dramas. 
-- 2. to change all the drama titles (string) to upper case.
-- 3. to round ratings to int.
SELECT AVG(rating) AS average_rating FROM dramas;

SELECT title, UPPER(title) FROM dramas;

SELECT rating, ROUND(rating) FROM dramas; 

-- Use DELETE to remove drama under Id 6 
-- check if it's there first delete it and then check if it's been removed
SELECT * FROM dramas WHERE drama_id = 6; 

DELETE FROM dramas_genres WHERE drama_id = 6;
DELETE FROM dramas WHERE drama_id = 6;

SELECT * FROM dramas WHERE drama_id = 6;
 
-- query selecting all dramas sorted by rating. 
SELECT title, rating 
FROM dramas 
ORDER BY rating DESC;
