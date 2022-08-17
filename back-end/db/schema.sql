DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 

\c snack_a_log; 

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INTEGER,
    CHECK (fiber >= 0),
    protein INTEGER,
    CHECK (protein >= 0),
    added_sugar INTEGER,
    CHECK (added_sugar >= 0),
    is_healthy BOOLEAN,
    image TEXT
);
