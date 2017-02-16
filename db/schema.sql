CREATE DATABASE cats_db;

CREATE TABLE cat (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	catName VARCHAR(500) NOT NULL,
	petted BOOLEAN NOT NULL,
	date TIMESTAMP NOT NULL
);

INSERT INTO cat (catName, petted)
VALUES ("Luca", false);
INSERT INTO cat (catName, petted)
VALUES ("Jace", true);
INSERT INTO cat (catName, petted)
VALUES ("Olive", false);
INSERT INTO cat (catName, petted)
VALUES ("Margo", false);