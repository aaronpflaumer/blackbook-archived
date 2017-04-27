-- connect to database as developer role
\c blackbook developer

-- drop all tables
\i clear.sql

-- create new tables
\i create.sql

-- dummy blackbook_user data
INSERT INTO blackbook_user (email, password, user_name)
  VALUES ('test', 'test', 'Test User');
INSERT INTO blackbook_user (email, password, user_name)
  VALUES ('jkrowling@hogwarts.edu', 'hermyohknee', 'J.K. Rowling');
INSERT INTO blackbook_user (email, password, user_name)
  VALUES ('adumbledore@hogwarts.edu', 'sherbetlemon', 'Albus Dumbledore');
INSERT INTO blackbook_user (email, password, user_name)
  VALUES ('rskeeter@dailyprophet.com', 'queenofquills', 'Rita Skeeter');
INSERT INTO blackbook_user (email, password, user_name)
  VALUES ('neal@nealstephenson.com', '8934ntv934niu', 'Neal Stephenson');

-- dummy book data
INSERT INTO book (user_id, name)
  VALUES (2, 'Harry Potter');
INSERT INTO book (user_id, name)
  VALUES (4, 'The Life and Lies of Albus Dumbledore');
INSERT INTO book (user_id, name)
  VALUES (5, 'Snow Crash');

-- dummy character data
INSERT INTO character (book_id, name, biography)
  VALUES (1, 'Harry Potter', 'Harry James Potter (b. 31 July, 1980) was a half-blood wizard, the only child and son of James and Lily Potter (née Evans), and one of the most famous wizards of modern times. In what proved to be a vain attempt to circumvent a prophecy, that stated a boy born at the end of July of 1980 could be able to defeat him, Lord Voldemort attempted to murder him when he was a year and three months old. Voldemort murdered Harry''s parents as they tried to protect him shortly before attacking Harry himself. This early, unsuccessful attempt to vanquish Harry led to Voldemort''s first downfall, marking the end of the First Wizarding War and to Harry henceforth being known as "The Boy Who Lived". One consequence of Lily''s loving sacrifice was that her orphaned son had to be raised by her only remaining blood relative. Harry was raised by his Muggle aunt Petunia Dursley in a home where he was neither welcomed nor nurtured, but would be protected from Lord Voldemort, at least until he was seventeen years old. As the only known survivor of the Killing Curse (up to that point) Harry was already famous before he arrived at Hogwarts School of Witchcraft and Wizardry.');
INSERT INTO character (book_id, name, biography)
  VALUES (1, 'Ronald Weasley', 'Ronald Bilius "Ron" Weasley (b. 1 March, 1980) was a pure-blood wizard, the sixth son of Arthur and Molly Weasley (née Prewett). He was also the younger brother of Bill, Charlie, Percy, Fred, George, and the elder brother of Ginny. Ron and his brothers and sister lived in the Burrow. Ron began attending Hogwarts School of Witchcraft and Wizardry in 1991 and was Sorted into Gryffindor house. He soon became best friends with fellow student Harry Potter and later Hermione Granger.');
INSERT INTO character (book_id, name, biography)
  VALUES (1, 'Hermione Granger', 'Hermione Jean Granger (b. 19 September, 1979[1]) was an English Muggle-born witch and the only daughter of Mr. and Mrs. Granger, both dentists in London. Hermione grew up as a normal Muggle girl until, at age eleven, she learned that she was a witch and had been accepted into Hogwarts School of Witchcraft and Wizardry. She began attending the school on 1 September, 1991, where she was subsequently Sorted into Gryffindor House, despite having the intelligence to be in Ravenclaw. She possessed a brilliant academic mind, with a great possibility of having a photographic memory, and proved to be a gifted student. She was very studious and bookish.');
INSERT INTO character (book_id, name, biography)
  VALUES (3, 'Hiro Protagonist', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis quam lorem. Pellentesque facilisis, velit vel venenatis fringilla, neque ligula commodo nibh, id dapibus nisl mauris ac nisl. Fusce leo turpis, varius quis dapibus vitae, lobortis et sem. Mauris pharetra hendrerit tincidunt. Morbi ac ullamcorper nunc, sit amet pretium est. Cras vehicula gravida dolor. Quisque cursus vulputate diam lacinia imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec iaculis porttitor tellus, imperdiet vestibulum diam rhoncus et. Sed vehicula luctus nisl, at commodo sapien pretium posuere. Vestibulum congue tristique placerat. Nullam elementum, sapien dignissim cursus posuere, ipsum mauris efficitur est, sit amet tempor felis diam eget diam.');
INSERT INTO character (book_id, name, biography)
  VALUES (3, 'Y.T.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis quam lorem. Pellentesque facilisis, velit vel venenatis fringilla, neque ligula commodo nibh, id dapibus nisl mauris ac nisl. Fusce leo turpis, varius quis dapibus vitae, lobortis et sem. Mauris pharetra hendrerit tincidunt. Morbi ac ullamcorper nunc, sit amet pretium est. Cras vehicula gravida dolor. Quisque cursus vulputate diam lacinia imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec iaculis porttitor tellus, imperdiet vestibulum diam rhoncus et. Sed vehicula luctus nisl, at commodo sapien pretium posuere. Vestibulum congue tristique placerat. Nullam elementum, sapien dignissim cursus posuere, ipsum mauris efficitur est, sit amet tempor felis diam eget diam.');
INSERT INTO character (book_id, name, biography)
  VALUES (3, 'Uncle Enzo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis quam lorem. Pellentesque facilisis, velit vel venenatis fringilla, neque ligula commodo nibh, id dapibus nisl mauris ac nisl. Fusce leo turpis, varius quis dapibus vitae, lobortis et sem. Mauris pharetra hendrerit tincidunt. Morbi ac ullamcorper nunc, sit amet pretium est. Cras vehicula gravida dolor. Quisque cursus vulputate diam lacinia imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec iaculis porttitor tellus, imperdiet vestibulum diam rhoncus et. Sed vehicula luctus nisl, at commodo sapien pretium posuere. Vestibulum congue tristique placerat. Nullam elementum, sapien dignissim cursus posuere, ipsum mauris efficitur est, sit amet tempor felis diam eget diam.');
INSERT INTO character (book_id, name, biography)
  VALUES (3, 'Juanita Marquez', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis quam lorem. Pellentesque facilisis, velit vel venenatis fringilla, neque ligula commodo nibh, id dapibus nisl mauris ac nisl. Fusce leo turpis, varius quis dapibus vitae, lobortis et sem. Mauris pharetra hendrerit tincidunt. Morbi ac ullamcorper nunc, sit amet pretium est. Cras vehicula gravida dolor. Quisque cursus vulputate diam lacinia imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec iaculis porttitor tellus, imperdiet vestibulum diam rhoncus et. Sed vehicula luctus nisl, at commodo sapien pretium posuere. Vestibulum congue tristique placerat. Nullam elementum, sapien dignissim cursus posuere, ipsum mauris efficitur est, sit amet tempor felis diam eget diam.');
INSERT INTO character (book_id, name, biography)
  VALUES (3, 'L Bob Rife', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis quam lorem. Pellentesque facilisis, velit vel venenatis fringilla, neque ligula commodo nibh, id dapibus nisl mauris ac nisl. Fusce leo turpis, varius quis dapibus vitae, lobortis et sem. Mauris pharetra hendrerit tincidunt. Morbi ac ullamcorper nunc, sit amet pretium est. Cras vehicula gravida dolor. Quisque cursus vulputate diam lacinia imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec iaculis porttitor tellus, imperdiet vestibulum diam rhoncus et. Sed vehicula luctus nisl, at commodo sapien pretium posuere. Vestibulum congue tristique placerat. Nullam elementum, sapien dignissim cursus posuere, ipsum mauris efficitur est, sit amet tempor felis diam eget diam.');
INSERT INTO character (book_id, name, biography)
  VALUES (3, 'Dmitri "Raven" Ravinoff', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis quam lorem. Pellentesque facilisis, velit vel venenatis fringilla, neque ligula commodo nibh, id dapibus nisl mauris ac nisl. Fusce leo turpis, varius quis dapibus vitae, lobortis et sem. Mauris pharetra hendrerit tincidunt. Morbi ac ullamcorper nunc, sit amet pretium est. Cras vehicula gravida dolor. Quisque cursus vulputate diam lacinia imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec iaculis porttitor tellus, imperdiet vestibulum diam rhoncus et. Sed vehicula luctus nisl, at commodo sapien pretium posuere. Vestibulum congue tristique placerat. Nullam elementum, sapien dignissim cursus posuere, ipsum mauris efficitur est, sit amet tempor felis diam eget diam.');
INSERT INTO character (book_id, name, biography)
  VALUES (3, 'Fido', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis quam lorem. Pellentesque facilisis, velit vel venenatis fringilla, neque ligula commodo nibh, id dapibus nisl mauris ac nisl. Fusce leo turpis, varius quis dapibus vitae, lobortis et sem. Mauris pharetra hendrerit tincidunt. Morbi ac ullamcorper nunc, sit amet pretium est. Cras vehicula gravida dolor. Quisque cursus vulputate diam lacinia imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec iaculis porttitor tellus, imperdiet vestibulum diam rhoncus et. Sed vehicula luctus nisl, at commodo sapien pretium posuere. Vestibulum congue tristique placerat. Nullam elementum, sapien dignissim cursus posuere, ipsum mauris efficitur est, sit amet tempor felis diam eget diam.');


  -- dummy relationship_type data
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Friend', TRUE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Mother', TRUE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Father', TRUE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Brother', TRUE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Sister', TRUE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Mom', FALSE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Best Friend', FALSE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Rival', FALSE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Lovers', TRUE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Enemies', TRUE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Owner', FALSE);
  INSERT INTO relationship_type (name, suggested)
    VALUES ('Pet', FALSE);


-- dummy relationship data
INSERT INTO relationship (source_character_id, dest_character_id, source_type_id, dest_type_id)
  VALUES (1, 2, 1, 1);
INSERT INTO relationship (source_character_id, dest_character_id, source_type_id, dest_type_id)
  VALUES (1, 3, 1, 1);
INSERT INTO relationship (source_character_id, dest_character_id, source_type_id, dest_type_id)
  VALUES (2, 3, 1, 1);
INSERT INTO relationship (source_character_id, dest_character_id, source_type_id, dest_type_id)
  VALUES (4, 5, 1, 1);
INSERT INTO relationship (source_character_id, dest_character_id, source_type_id, dest_type_id)
  VALUES (5, 6, 1, 1);
INSERT INTO relationship (source_character_id, dest_character_id, source_type_id, dest_type_id)
  VALUES (4, 7, 9, 9);
INSERT INTO relationship (source_character_id, dest_character_id, source_type_id, dest_type_id)
  VALUES (4, 9, 10, 10);
INSERT INTO relationship (source_character_id, dest_character_id, source_type_id, dest_type_id)
  VALUES (5, 10, 11, 12);


  -- dummy tag data
  INSERT INTO tag (name, suggested)
    VALUES ('Age', TRUE);
  INSERT INTO tag (name, suggested)
    VALUES ('Height', TRUE);
  INSERT INTO tag (name, suggested)
    VALUES ('Species', TRUE);
  INSERT INTO tag (name, suggested)
    VALUES ('Gender', TRUE);
  INSERT INTO tag (name, suggested)
    VALUES ('Birthday', TRUE);
  INSERT INTO tag (name, suggested)
    VALUES ('Profession', TRUE);
  INSERT INTO tag (name, suggested)
    VALUES ('Residence', FALSE);
  INSERT INTO tag (name, suggested)
    VALUES ('Likes', FALSE);
  INSERT INTO tag (name, suggested)
    VALUES ('Dislikes', FALSE);
  INSERT INTO tag (name, suggested)
    VALUES ('Aliases', FALSE);


-- dummy character_tag data
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (1, 1, '11');
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (1, 4, 'Male');
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (1, 3, 'Human');
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (1, 5, '31 July, 1980');
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (4, 4, 'Male');
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (4, 3, 'Human');
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (5, 4, 'Female');
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (10, 3, 'Cyborg Dog');
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (4, 6, 'Freelance Hacker');
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (5, 6, 'Courier');
INSERT INTO character_tag (character_id, tag_id, value)
  VALUES (10, 6, 'Security');
