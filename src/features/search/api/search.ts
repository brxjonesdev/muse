import { Artist } from "@/entities/artist";
import { Album } from "@/entities/album";
import { Track } from "@/entities/track";
import { db } from "@/shared/api/db";
import { itunes } from "@/shared/api/itunes";
import {safeFetch} from "@/features/search/model/safe-fetch";
import normalizeQuery from "../model/normalize-query";
import mergeResults from "../model/merge-results";
import { mapDBAlbum, mapITunesAlbum } from "@/entities/album/api/mappers";
import { mapDBTrack, mapITunesTrack } from "@/entities/track/api/mappers";
import { mapDBArtist, mapITunesArtist } from "@/entities/artist/api/mappers";
import rankByQuery from "../model/rank-by-query";
import { determineSearchIntent } from "../model/determine-intent";


// Searches the database and iTunes in parallel, maps and merges their results,
// ranks matches by relevance, determines the search intent, and expands the results.
export default async function search(query: string): Promise<{
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
  lead: "album" | "artist" | "track" | "none";
}> {
  let artists: Artist[] = [];
  let albums: Album[] = [];
  let tracks: Track[] = [];

  const q = normalizeQuery(query);

  if (q.length < 2) {
    return {
      lead: "none",
      artists,
      albums,
      tracks,
    };
  }

  const [dbArtists, dbAlbums, dbTracks] = await Promise.all([
    db.artists.search(q),
    db.albums.search(q),
    db.tracks.search(q),
  ]);

  const [itArtists, itAlbums, itTracks] = await Promise.all([
    safeFetch(() => itunes.artist.search(q)),
    safeFetch(() => itunes.album.search(q)),
    safeFetch(() => itunes.track.search(q)),
  ]);
  
  const artistsDB = dbArtists.map(mapDBArtist);
  const albumsDB = dbAlbums.map(mapDBAlbum);
  const tracksDB = dbTracks.map(mapDBTrack);

  const artistsIT = itArtists.map(mapITunesArtist);
  const albumsIT = itAlbums.map(mapITunesAlbum);
  const tracksIT = itTracks.map(mapITunesTrack);

  artists = mergeResults({
    existingResults: artistsDB,
    incomingResults: artistsIT,
  }) as Artist[];

  albums = mergeResults({
    existingResults: albumsDB,
    incomingResults: albumsIT,
  }) as Album[];

  tracks = mergeResults({
    existingResults: tracksDB,
    incomingResults: tracksIT,
  }) as Track[];

  const rankedArtists = rankByQuery(artists, q, {
    name: (artist) => artist.name,
  });
  
  const rankedAlbums = rankByQuery(albums, q, {
    name: (album) => album.title,
    artist: (album) => album.artistName
  });
  
  const rankedTracks = rankByQuery(tracks, q, {
    name: (track) => track.title,
    artist: (track) => track.artistName,
    album: (track) => track.albumName
  });

  const lead = determineSearchIntent({
    artists: rankedArtists,
    albums: rankedAlbums,
    tracks: rankedTracks,
  });

  albums = rankedAlbums.map(rankedAlbum=> rankedAlbum.result);
  artists = rankedArtists.map(rankedAlbum => rankedAlbum.result);
  tracks = rankedTracks.map(rankedAlbum => rankedAlbum.result);

  return {
    lead,
    artists,
    albums,
    tracks,
  };
}