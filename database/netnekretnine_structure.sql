CREATE DATABASE IF NOT EXISTS `net_nekretnine` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `net_nekretnine`;

DROP TABLE IF EXISTS file;
DROP TABLE IF EXISTS realestate_aditional_characteristics;
DROP TABLE IF EXISTS user_favorite_realestate;
DROP TABLE IF EXISTS aditional_characteristics_for_realestate;
DROP TABLE IF EXISTS realestate;
DROP TABLE IF EXISTS user;


CREATE TABLE user (
    id int(15) NOT NULL AUTO_INCREMENT,
    username varchar(25) NOT NULL,
    email varchar(320) NOT NULL,
    password varchar(1000) NOT NULL,
    role varchar(25) NOT NULL,
	joined DATE NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (email)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE realestate (
    id INTEGER NOT NULL AUTO_INCREMENT,
	user_id INTEGER NOT NULL,
    title varchar(100) NOT NULL,
    description varchar(3000) NOT NULL,
	type varchar(100) NOT NULL,
	location varchar(1000) NOT NULL,
	status varchar(100) NOT NULL,
	state varchar(1000) NOT NULL,
	bed_rooms INTEGER NOT NULL,
	bath_rooms INTEGER NOT NULL,
	area INTEGER NOT NULL,
	guests INTEGER NOT NULL,
	price INTEGER NOT NULL,
	parking INTEGER NOT NULL,
	equipment INTEGER NOT NULL,
	floor INTEGER NOT NULL,
	maxFloors INTEGER NOT NULL,
	created_at DATE NOT NULL,
    updated_at DATE NOT NULL,
	registered BOOLEAN NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id) ,
    FULLTEXT (title,description)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE aditional_characteristics_for_realestate (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (name)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE user_favorite_realestate (
    user_id INTEGER NOT NULL,
	realestate_id INTEGER NOT NULL,
    favorited_at DATE NOT NULL,
    PRIMARY KEY (user_id,realestate_id),
	FOREIGN KEY (user_id) REFERENCES user(id) ,
	FOREIGN KEY (realestate_id) REFERENCES realestate(id)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE realestate_aditional_characteristics (
	id INTEGER NOT NULL,
    realestate_id INTEGER NOT NULL,
    aditional_characteristic_id INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (realestate_id) REFERENCES realestate(id), 
    FOREIGN KEY (aditional_characteristic_id) REFERENCES aditional_characteristics_for_realestate(id)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE file (
    id int NOT NULL AUTO_INCREMENT,
	realestate_id int NOT NULL,
    path varchar(256) NOT NULL,
    ext varchar(256) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (realestate_id) REFERENCES realestate(id) 
) ENGINE = InnoDB DEFAULT CHARSET=utf8;






