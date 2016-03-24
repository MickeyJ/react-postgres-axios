DROP DATABASE IF EXISTS pgteas;

CREATE DATABASE pgteas;

\c pgteas

CREATE TABLE teas(
    id serial PRIMARY KEY,
    name varchar(150),
    flavor varchar(150),
    in_stock bool
);

INSERT INTO teas
  VALUES ( default, 'green tea', 'greeny', TRUE),
         ( default, 'blue tea', 'blueish', false),
         ( default, 'red tea', 'reddish', TRUE),
         ( default, 'yellow tea', 'lemony', TRUE);