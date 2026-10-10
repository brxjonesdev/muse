
"use cache";

import { MusicBrainzSearch } from "./client";

export default async function findRecordingCredits(
  recordingId: string,
) {
  return MusicBrainzSearch(
    `recording/${recordingId}`,
    {
      inc: "artist-rels+work-rels",
    },
  );
}

