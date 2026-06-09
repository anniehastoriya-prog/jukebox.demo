-- TODO
CREATE TABLE tracks (
    id serial PRIMARY KEY,
    name text NOT NULL,
    duration_ms integer NOT NULL
);

CREATE TABLE playlist (
    id serial PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL
);

CREATE TABLE playlist_tracks (
    id serial PRIMARY KEY,
    playlisr_id integer NOT NULL REFERENCES playlist(id) ON DELETE CASCADE ,
    track_id integer NOT NULL REFERENCES track(id) ON DELETE CASCADE,
    UNIQUE (playlist_id, track_id)
);