-- a script that converts hbtn_0c_0 database to UTF8
USE `htbn_0c_0`
ALTER TABLE `first_table`
CONVERT TO CHARACTER SET utfmb8 COLLATE  utfmb8_general_ci;
ALTER DATABASE htbn_0c_0
CHARACTER SET = utfmb8
COLLATE = utfmb8_general_ci;


