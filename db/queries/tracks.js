import db from "#db/client";

export async function createTrack(name, duration) {
  const sql = `
    INSERT INTO tracks 
    (name, duration_ms)
    VALUES
    ($1, $2)
    RETURNING *
    `;
  const { rows: tracks } = await db.query(sql);
  return tracks;
}

export async function getTracksByPlaylistId(id) {
  const sql = `
    SELECT tracks.*
    FROM
    tracks
    JOIN playlist_tracks On playlist_tracks.trakc_id = tracks.id
    JOIN playlist On playlist.id = playlist_tracks.playlisr_id
    WHERE playlist.id = $1
    `;
  const {
    rows: [track],
  } = await db.query(sql, [id]);
  return track;
}
