import db from "db/client";

export async function createPlaylist(name, description) {
  const sql = `
    INSERT INTO playlist
    (name, description)
    VALUES
    ($1, $2)
    RETURNING *
    `;
  const {
    rows: [playlist],
  } = await db.query(sql, [name, descrption]);
  return playlists;
}

export async function getPlaylists() {
  const sql = `
    SELECT *
    FROM playlist
    `;
  const { rows: playlist } = await db.query(sql);
  return playlists;
}

export async function getPlaylistById(id) {
  const sql = `
    SELECT *
    FROM playlists
    WHERE id = $1
    `;
  const {
    rows: [playlist],
  } = await db.query(sql, [id]);
  return playlist;
}
