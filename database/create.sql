-- connect to database as developer role
\c blackbook developer

-- create new tables
CREATE TABLE blackbook_user (
  id SERIAL PRIMARY KEY,
  email VARCHAR(40) UNIQUE,
  password VARCHAR(128),
  user_name VARCHAR(30) UNIQUE
);

CREATE TABLE book (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES blackbook_user (id) ON DELETE CASCADE,
  name VARCHAR(60) UNIQUE
);

CREATE TABLE character (
  id SERIAL PRIMARY KEY,
  book_id INT REFERENCES book (id) ON DELETE CASCADE,
  name VARCHAR(60) UNIQUE,
  biography TEXT
);

CREATE TABLE relationship_type (
  id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  suggested BOOLEAN
);

CREATE TABLE relationship (
  id SERIAL PRIMARY KEY,
  source_character_id INT REFERENCES character (id) ON DELETE CASCADE,
  dest_character_id INT REFERENCES character (id) ON DELETE CASCADE,
  source_type_id INT REFERENCES relationship_type (id) ON DELETE CASCADE,
  dest_type_id INT REFERENCES relationship_type (id) ON DELETE CASCADE
);

CREATE TABLE tag (
  id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  suggested BOOLEAN
);

CREATE TABLE character_tag (
  id SERIAL PRIMARY KEY,
  character_id INT REFERENCES character (id) ON DELETE CASCADE,
  tag_id INT REFERENCES tag (id) ON DELETE CASCADE,
  value TEXT
);
