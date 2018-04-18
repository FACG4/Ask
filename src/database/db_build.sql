BEGIN;

DROP TABLE IF EXISTS users , questions , answers CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE questions(
  id SERIAL PRIMARY KEY,
  body TEXT,
  user_id INTEGER REFERENCES users (id)
);


CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  body TEXT,
  question_id INTEGER REFERENCES questions (id)
);


INSERT INTO users
(name)
VALUES
('Sallam'),
('Balsam'),
('Abdullah'),
('Ahmed');

INSERT INTO questions
(body ,user_id)
VALUES
('What is your favorite color?' , 4),
('How old are you?' , 1),
('Do you like programming?' , 3),
('Do you like programming?' , 3),
('Do you like programming?' , 3),
('Do you like programming?' , 3),
('Do you like programming?' , 3),
('Do you like dogs?' , 2);


INSERT INTO answers
(body ,question_id)
VALUES
('Red' , 1),
('12' , 2),
('No' , 3),
('No' , 3),
('No' , 3),
('No' , 3),
(null , 7),
('Yes I do :)' , 8);


COMMIT;
