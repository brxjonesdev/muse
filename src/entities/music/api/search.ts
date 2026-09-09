import { MusicSearchResponse } from "../model/types";
import { searchMusicBrainzArtists } from "./musicbrainz/search-artists";
import { searchMusicBrainzRecordings } from "./musicbrainz/search-recordings";
import {searchMusicBrainzReleaseGroups} from "./musicbrainz/search-release-groups";
import { normalizeAlbum } from "../mappers/map-album";
import { normalizeArtist } from "../mappers/map-artist"
import { normalizeTrack } from "../mappers/map-track"

export default async function searchMusic(
  query: string,
): Promise<MusicSearchResponse> {
  const artists = await searchMusicBrainzArtists(query);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const albums = await searchMusicBrainzReleaseGroups(query);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const tracks = await searchMusicBrainzRecordings(query);

  return {
    artists: artists.artists.map(normalizeArtist),
    albums: albums["release-groups"].map(normalizeAlbum),
    tracks: tracks.recordings.map(normalizeTrack),
  };
}