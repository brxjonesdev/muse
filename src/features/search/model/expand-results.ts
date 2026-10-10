import { Artist } from "@/entities/artist"
import { SearchIntent } from "./types"
import { Album } from "@/entities/album"
import { Track } from "@/entities/track"
import mergeResults from "./merge-results"
import { safeFetch } from "./safe-fetch"
import { itunes } from "@/shared/api/itunes"
import { mapITunesAlbum } from "@/entities/album/api/mappers"
import { mapITunesTrack } from "@/entities/track/api/mappers"

type ExpandedResults = {
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
  crates?: unknown[];
};

export async function expandResults({
  lead,
  artists,
  albums,
  tracks,
}: {
  lead: SearchIntent;
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
}): Promise<ExpandedResults> {
    if (lead === "none") {
    return {
      artists,
      albums,
      tracks,
    }
    }
  if (lead === "artist") {

    const primaryArtist = artists[0];
    
    const artistAlbumResults = await itunes.album.getArtistAlbums(
      primaryArtist.iTunesID,
    );
    
    albums = artistAlbumResults.results
      .filter(album => album.wrapperType !== "artist")
      .map(mapITunesAlbum);
    
    const artistTrackResults = await itunes.track.getArtistTracks(
      primaryArtist.iTunesID,
    );

    tracks = artistTrackResults.results
      .filter(album => album.wrapperType === "track")
      .map(mapITunesTrack);

    return {
      artists: [primaryArtist],
      albums,
      tracks
    }
  }
  if (lead === "album") {
    const primaryAlbum = albums[0];

    const albumTracklistResults = await itunes.album.getAlbumTracks(primaryAlbum.iTunesID);
    const artistResults = await itunes.artist.getById(primaryAlbum.artistID);
    console.log(albumTracklistResults.results, artistResults);
    return {
      albums,
      artists,
      tracks,
    }
  }
//   if (lead === "track") {
// 
//     // matching tracks are already ranked
//     const primaryTracks = tracks
// 
//     // get album IDs from tracks
//     const albumIDs = getAlbumIDs(primaryTracks)
// 
//     // get artist IDs from tracks
//     const artistIDs = getArtistIDs(primaryTracks)
// 
//     // get related albums
//     const trackAlbums = getAlbumsByIDs(albumIDs)
// 
//     // get related artists
//     const trackArtists = getArtistsByIDs(artistIDs)
// 
//     // merge related albums
//     albums = mergeResults(albums, trackAlbums)
// 
//     // merge related artists
//     artists = mergeResults(artists, trackArtists)
// 
//     // find matching crates
//     const crates = findMatchingCrates({
//       tracks: primaryTracks,
//       albums,
//       artists,
//     })
// 
//     // order:
//     // tracks → albums → crates → artists
// 
//     return {
//       tracks,
//       albums,
//       crates,
//       artists,
//     }
//   }
  return {
    albums,
    artists,
    tracks
  }
}