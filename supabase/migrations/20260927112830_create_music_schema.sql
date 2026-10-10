CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE TABLE artists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    normalized_name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    itunes_id BIGINT UNIQUE NOT NULL,
    mbid UUID UNIQUE,
    genre TEXT,
    image_url TEXT,
    added_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE albums (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    itunes_id BIGINT UNIQUE,
    mbid UUID UNIQUE,
    artist_id BIGINT NOT NULL REFERENCES artists(itunes_id) ON DELETE CASCADE,
    type TEXT,                -- album | single | ep
    cover_l TEXT,
    cover_m TEXT,
    copyright TEXT,
    country TEXT,
    genre TEXT,
    release_date DATE,
    label TEXT,
    track_count INTEGER,
    explicit BOOLEAN,
    upc TEXT,
    added_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (artist_id, slug)
);

CREATE TABLE tracks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    itunes_id BIGINT UNIQUE,
    mbid UUID UNIQUE,
    isrc TEXT,
    artist_id BIGINT NOT NULL REFERENCES artists(itunes_id) ON DELETE CASCADE,
    album_id BIGINT NOT NULL REFERENCES albums(itunes_id) ON DELETE CASCADE,
    track_number INTEGER,
    disc_number INTEGER NOT NULL DEFAULT 1,
    duration_ms INTEGER,
    explicit BOOLEAN NOT NULL DEFAULT FALSE,
    country TEXT,
    preview_url TEXT,
    artwork_url TEXT,
    release_date TIMESTAMPTZ,
    genre TEXT,
    itunes_url TEXT,
    added_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    UNIQUE (album_id, slug)
);

-- FK indexes
CREATE INDEX albums_artist_id_idx ON albums (artist_id);
CREATE INDEX tracks_album_id_idx  ON tracks (album_id);
CREATE INDEX tracks_artist_id_idx ON tracks (artist_id);
CREATE INDEX tracks_isrc_idx      ON tracks (isrc);

-- Search
CREATE INDEX artists_name_trgm ON artists USING GIN (name gin_trgm_ops);
CREATE INDEX albums_title_trgm ON albums  USING GIN (title gin_trgm_ops);