-- connect to database as developer role
\c blackbook developer

-- drop all tables
DROP TABLE IF EXISTS blackbook_user CASCADE;
DROP TABLE IF EXISTS book CASCADE;
DROP TABLE IF EXISTS character CASCADE;
DROP TABLE IF EXISTS relationship CASCADE;
DROP TABLE IF EXISTS relationship_type CASCADE;
DROP TABLE IF EXISTS character_tag CASCADE;
DROP TABLE IF EXISTS tag CASCADE;
