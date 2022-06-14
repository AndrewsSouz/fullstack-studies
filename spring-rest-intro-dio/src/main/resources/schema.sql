create table COURSE(
                      ID int not null AUTO_INCREMENT,
                      CODE varchar(8) not null,
                      DESCRIPTION varchar(150),
                      DURATION int not null,
                      IMAGE BLOB,
                      NAME varchar(30) not null,
                      PRICE float not null,
                      RATING float,
                      RELEASE timestamp,
                      PRIMARY KEY ( ID )
);